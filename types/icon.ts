// types/icon.ts
export interface IconMapping {
    [key: string]: string;
   }
   
   export const languageIcons: Record<string, string> = {
    'Vue': 'logos:vue',
    'JavaScript': 'logos:javascript',
    'TypeScript': 'logos:typescript-icon',
    'Python': 'logos:python',
    'PHP': 'logos:php',
    'HTML': 'logos:html-5',
    'CSS': 'logos:css-3',
    'Java': 'logos:java',
    'C#': 'logos:c-sharp',
    'Ruby': 'logos:ruby',
    'Go': 'logos:go',
    'Shell': 'logos:bash',
    'default': 'heroicons:code-bracket'
  }
   
   export const statusIcons: IconMapping = {
    'online': 'heroicons:check-circle',
    'idle': 'heroicons:clock',
    'dnd': 'heroicons:no-symbol',
    'offline': 'heroicons:minus-circle'
   }
   
   export function getLanguageIcon(language: string): string {
    return languageIcons[language] || languageIcons.default
  }
   
   export function getStatusIcon(status: string): string {
    return statusIcons[status] || 'heroicons:question-mark-circle'
   }