import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import BackgroundText from '../components/common/BackgoundText/BackgroundText'

export const About = () => {
    const [anchorId, setAnchorId] = useState<string | null>(null)

    useEffect(() => {
        const hash = window.location.hash.replace('#', '')
        setAnchorId(hash)
    }, [window.location.hash])

    const aboutContent = [
        {
            id: 'about',
            title: '关于该服务',
            content: (
                <p>
                    MIAOMC统一验证中心 (MIAOMC Passport Service) 是 MIAOMC
                    账号体系下的一个核心服务，旨在统一管理和验证用户账号信息。你也许已经发现，若想要在MIAOMC旗下站点使用账号，都会首先经过该服务的验证。
                </p>
            )
        },
        {
            id: 'register',
            title: '如何注册',
            content: (
                <p>
                    我们暂不开放网页端注册功能，如果您想要使用 MIAOMC旗下服务，必须注册账号的，
                    <TextEmphasis>请加入MIAOMC Minecraft Server，在大厅内发起注册申请</TextEmphasis>
                    。一个MIAOMC账户可以绑定多个Minecraft游戏角色。
                    <br />
                    <br />
                    若您已经拥有MIAOMC账号，且希望绑定非主要Minecraft游戏角色，在大厅内发起登录请求时，请在网页端选择，从角色，否则会要求您创建一个新的MIAOMC账号。
                </p>
            )
        },
        {
            id: 'forgot-password',
            title: '忘记密码',
            content: (
                <p>
                    如果您忘记了密码，且账号尚未绑定邮箱的，请加入
                    <TextEmphasis>MIAOMC Minecraft Server</TextEmphasis>
                    ，随后可在大厅发起密码重置请求。或者通过大厅内链接实现无密码登录。
                    <br />
                    <br />
                    需要注意的是，若您的Minecraft游戏角色非MIAOMC账号绑定的主要角色，则只能进行解绑操作，无法重置密码。
                </p>
            )
        }
    ]

    return (
        <>
            <AboutPageContainer>
                <AboutContainer>
                    <AboutContentContainer>
                        {aboutContent.map((e) => (
                            <>
                                <AboutTitle
                                    key={e.id}
                                    id={e.id}
                                    className={anchorId === e.id ? 'anchor' : ''}
                                >
                                    {e.title}
                                </AboutTitle>
                                <AboutContent>{e.content}</AboutContent>
                            </>
                        ))}
                    </AboutContentContainer>
                </AboutContainer>
            </AboutPageContainer>
            <BackgroundText text="ABOUT" />
        </>
    )
}

export default About

const AboutPageContainer = styled.div`
    height: 100%;
    width: 100%;
`

const AboutContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    width: 85%;
`

const AboutContentContainer = styled.div`
    min-height: calc(100vh - 12rem);
    margin-top: 5rem;
    width: 100%;
    flex-direction: column;
`

const AboutTitle = styled.h1`
    font-size: 32px;
    color: var(--text-primary);
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        color: var(--text-emphasis);
        transform: translateX(5px) scale(1.01);
    }

    &.anchor {
        color: var(--text-emphasis);
        animation: anchor-link 0.5s ease 7 alternate;
    }

    &.anchor::before {
        content: '> ';
        vertical-align: middle;
        font-size: 1.2rem;
        color: var(--text-emphasis);
        animation: anchor-before-arrow 1s ease forwards;
    }
    &.anchor:hover {
        transform: none;
    }

    @keyframes anchor-before-arrow {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes anchor-link {
        from {
            transform: translateX(-15px);
            color: var(--text-primary);
        }
        to {
            transform: translateX(0);
            color: var(--text-emphasis);
        }
    }
`

const AboutContent = styled.div`
    font-size: 18px;
    color: var(--text-primary);
    margin: 1rem 0;
    line-height: 1.6;
`

const TextEmphasis = styled.span`
    color: var(--text-emphasis);
    font-weight: bold;
`
