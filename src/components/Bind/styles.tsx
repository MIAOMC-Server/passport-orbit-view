import styled from '@emotion/styled'

export const BindContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 60%;
    height: 60%;
    min-width: 400px;
    max-width: 800px;
    max-height: 1000px;

    background-color: var(--bg-primary);
    border-radius: 16px;
    box-shadow: 0 24px 32px rgba(0, 0, 0, 0.15);

    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 32px 48px rgba(0, 0, 0, 0.2);
    }
`

export const BindContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 2rem;
    box-sizing: border-box;
`

export const BindTitle = styled.h1`
    position: relative;
    margin: 0 0 1rem 0;

    font-size: 2rem;
    font-weight: bold;
    color: var(--text-primary);
    text-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

    user-select: none;
    transition: all 0.3s ease;

    &::after {
        content: 'Bind';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;

        font-size: 4rem;
        color: var(--text-primary);
        opacity: 0.1;
        transition: color 0.3s ease;
    }

    &:hover {
        color: var(--text-emphasis);
        transform: scale(1.05) rotate(-2deg) translateY(-2px);

        &::after {
            color: var(--text-emphasis);
        }
    }

    &:active {
        transform: scale(0.98) rotate(-1deg);
    }
`

export const BindSubtitle = styled.h2`
    margin: 0 0 2rem 0;

    font-size: 1.2rem;
    color: var(--text-secondary);
    text-align: center;
    line-height: 1.5;

    span {
        color: var(--text-emphasis);
        font-weight: bold;
    }
`

export const BindCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    align-items: stretch;
    justify-content: center;

    width: 100%;
    max-width: 600px;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`

export const BindCard = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    padding: 1.5rem;
    max-width: 16rem;
    min-height: 12rem;

    background-color: var(--card-bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        border-color: var(--text-emphasis);
    }

    &:active {
        transform: translateY(-2px);
    }

    h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--text-primary);
    }

    p {
        margin: 0;
        font-size: 1rem;
        color: var(--text-primary);
        line-height: 1.4;

        span {
            color: var(--text-emphasis);
            font-weight: 600;
        }
    }
`

export const BindTipsArea = styled.div`
    margin-top: 20px;
    width: 80%;
    padding-bottom: 0;
    border-radius: 4px;
    color: var(--text-secondary);
    text-align: center;
    font-weight: normal;
    font-family: 'pingfang SC', 'Microsoft YaHei', '微软雅黑', sans-serif, Arial, sans-serif;
    font-size: 1rem;
    user-select: none;

    a {
        display: inline-block;
        padding-left: 10px;
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s ease, transform 0.3s ease;
    }

    a:hover {
        color: var(--text-emphasis);
        text-decoration: underline;
        transform: translateX(-6px);
    }

    a::after {
        content: '>';
        opacity: 0;
        position: relative;
        color: var(--text-secondary);
        transition: all 0.3s ease;
    }
    a:hover::after {
        position: relative;
        color: var(--text-emphasis);
        content: '>';
        opacity: 1;
        z-index: -1;
    }
`
