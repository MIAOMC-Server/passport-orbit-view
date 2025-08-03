import styled from '@emotion/styled'
import { Link } from 'react-router'

export const Home = () => {
    return (
        <HomePageContainer>
            <HomeContainer>
                <HomeContentContainer>
                    <HomeTitle>MIAOMC Passport Service</HomeTitle>
                    <HomeSubtitle>账号体系化统一 管理/验证 服务</HomeSubtitle>
                    <Link to="/login">
                        <HomePrimaryButton>开始使用 </HomePrimaryButton>
                    </Link>
                </HomeContentContainer>
            </HomeContainer>
        </HomePageContainer>
    )
}

export default Home

const AnimationSlideIn = `
    @keyframes slideIn {
        from {
            transform: translateY(30px);
            opacity: 0;
            }
        to {
            transform: translateY(0);
            opacity: 1;
            }
    }
`

const HomePageContainer = styled.div`
    overflow: hidden;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

const HomeContainer = styled.div`
    overflow: hidden;
    max-width: 960px;
    max-height: 95%;
    margin: 0 auto;
    width: 85%;
`

const HomeContentContainer = styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    text-align: center;
    height: calc(100vh - 12rem);
    align-items: center;
    width: 100%;
    flex-direction: column;
`

const HomeTitle = styled.h1`
    font-size: 48px;
    color: var(--text-primary);
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0.5rem;

    opacity: 0;
    animation: slideIn 0.5s ease-out forwards;
    ${AnimationSlideIn}
`

const HomeSubtitle = styled.h2`
    font-size: 28px;
    color: var(--text-secondary);
    margin-top: 0.5rem;
    margin-bottom: 5rem;

    opacity: 0;
    animation: slideIn 0.5s ease-out forwards;
    ${AnimationSlideIn}
    animation-delay: 0.2s;
`

const HomePrimaryButton = styled.button`
    background-color: var(--btn-primary-bg);
    color: var(--btn-primary-text);
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;

    &:hover {
        transform: scale(1.05);
        background-color: var(--btn-primary-hover);
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: scale(0.95);
        background-color: var(--btn-primary-active);
        box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
    }

    opacity: 0;
    animation: slideIn 0.5s ease-out forwards;
    ${AnimationSlideIn}
    animation-delay: 0.4s;

    a {
        color: var(--btn-primary-text);
        text-decoration: none;
    }
`
