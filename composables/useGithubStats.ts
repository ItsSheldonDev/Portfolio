import { Octokit } from '@octokit/rest'
import type { LanguageStats, GithubStats, ExtendedRepo } from '~/types/github'

// Création d'une instance Octokit avec un délai de timeout
const octokit = new Octokit({
 request: {
   timeout: 10000 // 10 secondes timeout
 }
})

// Configuration
const CONFIG = {
 CACHE_KEY: 'github-data',
 CACHE_DURATION: 60 * 60 * 1000, // 1 heure
 USERNAME: 'ItsSheldonDev',
 MAX_REPOS: 100,
 TOP_LANGUAGES_LIMIT: 5,
 TOP_TOPICS_LIMIT: 10
} as const

export function useGithubStats() {
 const data = ref<ExtendedRepo[]>([])
 const pending = ref(true)
 const error = ref<Error | null>(null)
 const lastUpdated = ref<Date | null>(null)

 // Cache utilities
 const cache = {
   load: (): ExtendedRepo[] | null => {
     try {
       const cached = localStorage.getItem(CONFIG.CACHE_KEY)
       if (!cached) return null

       const { data, timestamp } = JSON.parse(cached)
       if (Date.now() - timestamp < CONFIG.CACHE_DURATION) {
         lastUpdated.value = new Date(timestamp)
         return data
       }
       return null
     } catch {
       return null
     }
   },

   save: (reposData: ExtendedRepo[]): void => {
     try {
       localStorage.setItem(CONFIG.CACHE_KEY, JSON.stringify({
         data: reposData,
         timestamp: Date.now()
       }))
       lastUpdated.value = new Date()
     } catch (err) {
       console.error('Failed to save to cache:', err)
     }
   }
 }

 // Data fetching
 const fetchRepositories = async (): Promise<ExtendedRepo[]> => {
   const { data: repos } = await octokit.repos.listForUser({
     username: CONFIG.USERNAME,
     sort: 'updated',
     direction: 'desc',
     per_page: CONFIG.MAX_REPOS
   })

   return await Promise.all(
     repos.map(async (repo) => {
       try {
         const { data: languages } = await octokit.repos.listLanguages({
           owner: CONFIG.USERNAME,
           repo: repo.name
         })

         // Calculer le langage principal
         let mainLanguage = null
         if (Object.keys(languages).length > 0) {
           const totalBytes = Object.values(languages).reduce((a, b) => a + b, 0)
           const sortedLanguages = Object.entries(languages)
             .sort(([, a], [, b]) => b - a)
           
           mainLanguage = sortedLanguages[0][0] // Prend le langage avec le plus de bytes
         }

         return { 
           ...repo, 
           languages,
           language: mainLanguage || repo.language // Utilise le langage principal calculé ou celui du repo par défaut
         } as ExtendedRepo
       } catch {
         return { 
           ...repo, 
           languages: {},
           language: repo.language 
         } as ExtendedRepo
       }
     })
   )
 }

 // Data processing
 const processLanguages = (repos: ExtendedRepo[]): Map<string, number> => {
   const languageMap = new Map<string, number>()
   repos.forEach(repo => {
     if (repo.languages) {
       Object.entries(repo.languages).forEach(([lang, bytes]) => {
         languageMap.set(lang, (languageMap.get(lang) || 0) + bytes)
       })
     }
   })
   return languageMap
 }

 const processTopics = (repos: ExtendedRepo[]): Map<string, number> => {
   const topicsMap = new Map<string, number>()
   repos.forEach(repo => {
     repo.topics?.forEach(topic => {
       topicsMap.set(topic, (topicsMap.get(topic) || 0) + 1)
     })
   })
   return topicsMap
 }

 // Computed stats
 const stats = computed<GithubStats>(() => {
   const repos = data.value
   const languageMap = processLanguages(repos)
   const topicsMap = processTopics(repos)

   const totalBytes = Array.from(languageMap.values()).reduce((a, b) => a + b, 0)

   return {
     totalProjects: repos.length,
     totalStars: repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0),
     totalForks: repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0),
     totalSize: repos.reduce((acc, repo) => acc + (repo.size || 0), 0),
     mainLanguage: Array.from(languageMap.entries())
       .sort((a, b) => b[1] - a[1])[0]?.[0] || '',
     topLanguages: Array.from(languageMap.entries())
       .map(([name, count]) => ({
         name,
         count,
         percentage: Math.round((count / totalBytes) * 100)
       }))
       .sort((a, b) => b.count - a.count)
       .slice(0, CONFIG.TOP_LANGUAGES_LIMIT),
     topTopics: Array.from(topicsMap.entries())
       .map(([name, count]) => ({ name, count }))
       .sort((a, b) => b.count - a.count)
       .slice(0, CONFIG.TOP_TOPICS_LIMIT)
   }
 })

 // Fetching with error handling and cache
 const fetchData = async () => {
   try {
     // Vérifier le cache d'abord
     const cachedData = cache.load()
     if (cachedData) {
       data.value = cachedData
       pending.value = false
       return
     }

     data.value = await fetchRepositories()
     cache.save(data.value)
   } catch (err) {
     error.value = err instanceof Error ? err : new Error('Failed to fetch GitHub data')
     // Essayer de charger depuis le cache en cas d'erreur
     const cachedData = cache.load()
     if (cachedData) {
       data.value = cachedData
     }
   } finally {
     pending.value = false
   }
 }

 // Filtrage des repos
 const filteredRepos = (filter: string) => computed(() => {
   if (filter === 'all') return data.value
   return data.value.filter(repo => repo.topics?.includes(filter))
 })

 // Force refresh avec rate limiting
 const lastRefresh = ref<number>(0)
 const forceRefresh = async () => {
   const now = Date.now()
   if (now - lastRefresh.value < 5000) {
     throw new Error('Please wait before refreshing again')
   }
   lastRefresh.value = now
   localStorage.removeItem(CONFIG.CACHE_KEY)
   await fetchData()
 }

 // Initial fetch
 onMounted(fetchData)

 return {
   repos: computed(() => data.value),
   stats,
   pending: computed(() => pending.value),
   error: computed(() => error.value),
   lastUpdated: computed(() => lastUpdated.value),
   filteredRepos,
   refresh: forceRefresh
 }
}