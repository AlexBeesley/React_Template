import { useEffect, useState } from 'react'
import Styles from '../Styles/darkmodetoggle.module.scss'

const useLocalStorage = (key: string, initialValue: boolean) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

const setDarkMode = (isDark: any) => {
  const root = document.documentElement
  if (isDark) {
    root.style.setProperty('--primary', '#f2f2f2')
    root.style.setProperty('--secondary', '#BCBCBC')
    root.style.setProperty('--tertiary', '#8A8A8A')
    root.style.setProperty('--quaternary', '#5A5A5A')
    root.style.setProperty('--accent', '#7FD1AE')
    root.style.setProperty('--background', '#000000')
    root.style.setProperty('--light', '#ffffff5d')
  } else {
    root.style.setProperty('--primary', '#00000')
    root.style.setProperty('--secondary', '#C3C3C3')
    root.style.setProperty('--tertiary', '#E9E9E9')
    root.style.setProperty('--quaternary', '#1E1E1E')
    root.style.setProperty('--accent', '#7FD1AE')
    root.style.setProperty('--background', '#ffffff')
    root.style.setProperty('--light', '#ffffff')
  }
}

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('DARK_MODE_KEY', false)

  useEffect(() => {
    setDarkMode(isDarkMode)
  }, [isDarkMode])

  console.log('dark mode:', isDarkMode)

  return (
    <div className={Styles.darkmodetoggle}>
      <button
        className={Styles.button}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? '☀️' : '🌖'}
      </button>
    </div>
  )
}
