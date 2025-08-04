import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useThemeToggle from '../../../hooks/useThemeToggle'

const Header = () => {
    const { currentTheme, themeToggle } = useThemeToggle()
    const [isScrolled, setIsScrolled] = useState(false)
    const isMicrosoftEdge = /Edg\/\d+/.test(navigator.userAgent)

    console.log(isMicrosoftEdge)
    const location = useLocation()
    const currentPath = location.pathname

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header>
            <HeaderContainer
                className={
                    isScrolled && !isMicrosoftEdge
                        ? 'scrolled'
                        : isScrolled && isMicrosoftEdge
                        ? 'edgeScrolled'
                        : ''
                }
            >
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
    position: fixed;
    width: 100%;
    user-select: none;
    transition: all 0.3s ease;
    z-index: 1000;

    &.scrolled {
        background-color: rgba(var(--bg-primary-rgb), 0.5);
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
    }

    &.edgeScrolled {
        background-color: rgba(var(--bg-primary-rgb), 1);
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }
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
