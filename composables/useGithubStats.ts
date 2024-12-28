interface GithubRepo {
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function useGithubStats() {
  const { data: repos } = useFetch<GithubRepo[]>('https://api.github.com/users/ItsSheldonDev/repos')
  
  const stats = computed(() => ({
    totalProjects: repos.value?.length || 0,
    totalStars: repos.value?.reduce((acc: number, repo) => acc + repo.stargazers_count, 0) || 0,
    totalForks: repos.value?.reduce((acc: number, repo) => acc + repo.forks_count, 0) || 0,
    mainLanguage: getMostUsedLanguage(repos.value)
  }))

  function getMostUsedLanguage(repos: GithubRepo[] | null): string {
    if (!repos) return ''
    // Filtrer les langages null ou undefined
    const languages = repos
      .filter(repo => repo.language) // Ne garde que les repos avec un langage défini
      .map(repo => repo.language)
    
    // Compter les occurrences de chaque langage
    const languageCounts = languages.reduce((acc, lang) => {
      if (!lang) return acc
      acc[lang] = (acc[lang] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    // Trier par nombre de repos et retourner le plus utilisé
    const sortedLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1]) // Trie par nombre décroissant
    
    console.log('Languages found:', sortedLanguages) // Pour debug
    return sortedLanguages[0]?.[0] || ''
  }

  return { stats }
}