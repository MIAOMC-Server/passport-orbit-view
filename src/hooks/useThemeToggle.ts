import { useEffect, useState } from 'react'

const useThemeToggle = () => {
    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    const bodyElement = document.getElementById('main')!

    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme') || browserTheme
    })

    // 初始化主题
    useEffect(() => {
        bodyElement.classList.remove('light-mode', 'dark-mode')
        bodyElement.classList.add(currentTheme === 'dark' ? 'dark-mode' : 'light-mode')
    }, [currentTheme, bodyElement])

    const themeToggle = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        setCurrentTheme(newTheme)
        localStorage.setItem('theme', newTheme)

        // 移除所有主题类，然后添加新的
        bodyElement.classList.remove('light-mode', 'dark-mode')
        bodyElement.classList.add(newTheme === 'dark' ? 'dark-mode' : 'light-mode')
    }

    // 返回当前主题和切换函数
    return { currentTheme, themeToggle }
}

export default useThemeToggle
