// composables/useLocalization.ts
import { ref } from 'vue'

interface LocaleMessages {
  [key: string]: any
}

export function useLocalization() {
  const currentLocale = ref('en')
  const messages: LocaleMessages = {
    en: {
      delivery: {
        title: 'Global Delivery Network',
        subtitle: 'Experience world-class logistics with our intelligent delivery system'
      }
    },
    // Add more languages as needed
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value = messages[currentLocale.value]
    
    for (const k of keys) {
      value = value[k]
      if (!value) return key
    }
    
    return value
  }

  const setLocale = (locale: string) => {
    currentLocale.value = locale
  }

  return {
    currentLocale,
    t,
    setLocale
  }
}