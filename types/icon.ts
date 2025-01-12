// types/icon.ts
export interface IconMapping {
  [key: string]: string;
}
 
export const languageIcons: Record<string, string> = {
  'Vue': 'i-logos-vue',
  'JavaScript': 'i-logos-javascript',
  'TypeScript': 'i-logos-typescript-icon',
  'Python': 'i-logos-python',
  'PHP': 'i-logos-php',
  'HTML': 'i-logos-html-5',
  'CSS': 'i-logos-css-3',
  'Java': 'i-logos-java',
  'C#': 'i-logos-c-sharp',
  'Ruby': 'i-logos-ruby',
  'Go': 'i-logos-go',
  'Shell': 'i-logos-bash',
  'Hack': 'i-logos-hacklang',
  'default': 'i-heroicons-code-bracket'
}
 
export const statusIcons: IconMapping = {
  'online': 'i-heroicons-check-circle',
  'idle': 'i-heroicons-clock',
  'dnd': 'i-heroicons-no-symbol', 
  'offline': 'i-heroicons-minus-circle'
}
 
export function getLanguageIcon(language: string): string {
  return languageIcons[language] || languageIcons.default
}
 
export function getStatusIcon(status: string): string {
  return statusIcons[status] || 'i-heroicons-question-mark-circle'
}