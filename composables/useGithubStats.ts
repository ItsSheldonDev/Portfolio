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
      const languages = repos.map(repo => repo.language).filter(Boolean)
      return Object.entries(
        languages.reduce((acc: Record<string, number>, lang: string) => ({
          ...acc,
          [lang]: (acc[lang] || 0) + 1
        }), {})
      ).sort((a, b) => b[1] - a[1])[0]?.[0] || ''
    }
  
    return { stats }
  }