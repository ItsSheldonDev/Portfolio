// types/icon.ts
export interface IconMapping {
    [key: string]: string;
   }
   
   export const languageIcons: IconMapping = {
    'JavaScript': 'logos:javascript',
    'TypeScript': 'logos:typescript-icon', 
    'Vue': 'logos:vue',
    'Python': 'logos:python',
    'PHP': 'logos:php',
    'HTML': 'logos:html-5',
    'CSS': 'logos:css-3'
   }
   
   export const statusIcons: IconMapping = {
    'online': 'heroicons:check-circle',
    'idle': 'heroicons:clock',
    'dnd': 'heroicons:no-symbol',
    'offline': 'heroicons:minus-circle'
   }
   
   export function getLanguageIcon(language: string): string {
    return languageIcons[language] || 'heroicons:code-bracket'
   }
   
   export function getStatusIcon(status: string): string {
    return statusIcons[status] || 'heroicons:question-mark-circle'
   }