import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useEffect(() => {
    console.log(theme)
    localStorage.setItem('theme', theme)
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])
  const values = {
    theme,
    setTheme,
  }
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
