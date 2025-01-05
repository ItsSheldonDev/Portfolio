// types/github.ts
import type { Octokit } from '@octokit/rest'
import type { components } from '@octokit/openapi-types'

type Repository = components["schemas"]["repository"]

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
  topTopics: {name: string; count: number}[];
}

export interface ExtendedRepo extends Repository {
  languages: Record<string, number>;
}