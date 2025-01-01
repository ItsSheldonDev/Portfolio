interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages_url: string;
  language: string | null;
  languages: Record<string, number>;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  private: boolean;
  size: number;
 }
 
 interface LanguageStats {
  name: string;
  count: number;
  percentage: number;
 }
 
 export function useGithubStats() {
  const { data: repos, pending, error, refresh } = useFetch<GithubRepo[]>('https://api.github.com/users/ItsSheldonDev/repos', {
    headers: {
      Accept: 'application/vnd.github.mercy-preview+json'
    }
  })
 
  // Fetch languages data for each repo
  watch(repos, async () => {
    if (repos.value) {
      for (const repo of repos.value) {
        const { data } = await useFetch<Record<string, number>>(repo.languages_url)
        repo.languages = data.value || {}
        // Set primary language as the one with highest percentage
        if (Object.keys(repo.languages).length > 0) {
          const sortedLangs = Object.entries(repo.languages)
            .sort(([,a], [,b]) => b - a)
          repo.language = sortedLangs[0][0]
        }
      }
    }
  }, { immediate: true })
 
  const stats = computed(() => ({
    totalProjects: repos.value?.length || 0,
    totalStars: repos.value?.reduce((acc, repo) => acc + repo.stargazers_count, 0) || 0,
    totalForks: repos.value?.reduce((acc, repo) => acc + repo.forks_count, 0) || 0,
    totalSize: repos.value?.reduce((acc, repo) => acc + repo.size, 0) || 0,
    mainLanguage: getMostUsedLanguage(repos.value),
    topLanguages: getTopLanguages(repos.value),
    topTopics: getTopTopics(repos.value)
  }))
 
  function getMostUsedLanguage(repos: GithubRepo[] | null): string {
    if (!repos) return ''
    const languages = repos
      .filter(repo => repo.language)
      .map(repo => repo.language!)
    
    const languageCounts = languages.reduce((acc, lang) => {
      acc[lang] = (acc[lang] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    return Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || ''
  }
 
  function getTopLanguages(repos: GithubRepo[] | null): LanguageStats[] {
    if (!repos) return []
    
    const languages = repos.reduce((acc, repo) => {
      if (repo.languages) {
        Object.entries(repo.languages).forEach(([lang, bytes]) => {
          acc[lang] = (acc[lang] || 0) + bytes
        })
      }
      return acc
    }, {} as Record<string, number>)
 
    const total = Object.values(languages).reduce((sum, count) => sum + count, 0)
 
    return Object.entries(languages)
      .map(([name, count]) => ({
        name,
        count,
        percentage: Math.round((count / total) * 100)
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5)
  }
 
  function getTopTopics(repos: GithubRepo[] | null): {name: string, count: number}[] {
    if (!repos) return []
    
    const topics = repos
      .flatMap(repo => repo.topics || [])
      .reduce((acc, topic) => {
        acc[topic] = (acc[topic] || 0) + 1
        return acc
      }, {} as Record<string, number>)
 
    return Object.entries(topics)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10)
  }
 
  const filteredRepos = (filter: string) => computed(() => {
    if (!repos.value) return []
    
    let filtered = [...repos.value].sort((a, b) => 
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    )
    
    if (filter !== 'all') {
      filtered = filtered.filter(repo => repo.topics?.includes(filter))
    }
    
    return filtered
  })
 
  return {
    repos,
    pending,
    error,
    refresh,
    filteredRepos,
    stats
  }
 }