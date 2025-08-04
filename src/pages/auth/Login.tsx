import styled from '@emotion/styled'
import BackgroundText from '../../components/common/BackgoundText/BackgroundText'
import { Link } from 'react-router'
import Form from '../../components/common/Form/Form'

const Login = () => {
    return (
        <>
            <LoginContainer>
                <LoginContentContainer>
                    <LoginTitle>登录</LoginTitle>
                    <Form>
                        <input
                            type="text"
                            id="login-username"
                            placeholder="邮箱 / 玩家名"
                            required
                        />
                        <input type="password" id="login-password" placeholder="密码" required />
                        <button type="submit">登录</button>
                    </Form>
                    <LoginTipsArea>
                        <Link to="/about#forgot-password">忘记密码</Link>
                        <Link to="/about#register">如何注册</Link>
                    </LoginTipsArea>
                </LoginContentContainer>
            </LoginContainer>
            <BackgroundText text="Login" />
        </>
    )
}

export default Login

const LoginContainer = styled.div`
    position: absolute;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 60%;
    width: 60%;
    min-width: 400px;
    max-width: 600px;
    max-height: 400px;
    background-color: var(--bg-primary);
    border-radius: 16px;
    box-shadow: 0 24px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0 32px 48px rgba(0, 0, 0, 0.2);
    }
`

const LoginContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const LoginTitle = styled.h1`
    margin-top: 0px;
    padding-top: 0px;
    font-size: 2rem;
    font-weight: bold;
    color: var(--text-primary);
    position: relative;
    text-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    user-select: none;
    transition: all 0.3s ease;

    &:hover {
        color: var(--text-emphasis);
        transform: scale(1.1) rotate(-5deg) translateY(-5px);
    }

    &:active {
        color: var(--text-emphasis);
        transform: scale(0.95) rotate(-2deg) translateY(-3px);
    }

    &::after {
        content: 'LOGIN';
        font-size: 4rem;
        color: var(--text-primary);
        opacity: 0.1;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
    &:hover::after {
        color: var(--text-primary);
    }
`

const LoginTipsArea = styled.div`
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
