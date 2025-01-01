export interface GithubRepo { 
 id: number;
 name: string; 
 description: string;
 html_url: string;
 language: string | null;
 stargazers_count: number;
 forks_count: number;
 topics: string[];
 updated_at: string;
 private: boolean;
 size: number;
}

export interface LanguageStats {
 name: string;
 count: number; 
 percentage: number;
}

export interface GithubStats {
 totalProjects: number;
 totalStars: number;
 totalForks: number; 
 totalSize: number;
 mainLanguage: string;
 topLanguages: LanguageStats[];
 topTopics: {
   name: string;
   count: number;
 }[];
}

export interface CachedGithubData {
 repos: GithubRepo[];
 stats: GithubStats;
}