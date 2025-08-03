import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const browserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    const bodyElement = document.getElementById('main')!

    const [currentTheme, setCurrentTheme] = useState(() => {
        return localStorage.getItem('theme') || browserTheme
    })

    const location = useLocation()
    const currentPath = location.pathname

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

    return (
        <header>
            <HeaderContainer>
                <HeaderNav>
                    <HeaderTitle>
                        MIAOMC
                        <span
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                marginLeft: '0.5rem'
                            }}
                        >
                            Passport Service
                        </span>
                    </HeaderTitle>
                    <HeaderNavList>
                        <HeaderNavItem>
                            <Link to="/" style={currentPath === '/' ? ActivedLink : {}}>
                                主页
                            </Link>
                        </HeaderNavItem>
                        <HeaderNavItem>
                            <Link to="/about" style={currentPath === '/about' ? ActivedLink : {}}>
                                关于该服务
                            </Link>
                        </HeaderNavItem>
                        <HeaderNavItem>
                            <a
                                onClick={() => {
                                    themeToggle()
                                }}
                            >
                                {currentTheme === 'dark' ? `亮色模式` : `深色模式`}
                            </a>
                        </HeaderNavItem>
                    </HeaderNavList>
                </HeaderNav>
            </HeaderContainer>
        </header>
    )
}

export default Header

const ActivedLink = {
    color: 'var(--primary-active)',
    fontWeight: 'bold'
}

const HeaderContainer = styled.div`
    background-color: var(--bg-primary);
    width: 100%;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    user-select: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(2px);
`

const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`

const HeaderTitle = styled.h1`
    color: var(--text-primary);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    padding: 1rem;
`

const HeaderNavList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`

const HeaderNavItem = styled.li`
    margin: 0 1rem;

    a {
        display: inline-block;
        color: var(--text-primary);
        font-weight: 600;
        text-decoration: none;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: var(--primary-hover);
        }
    }
`
