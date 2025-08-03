import styled from '@emotion/styled'
import BackgroundText from '../components/common/BackgoundText/BackgroundText'
import { Link } from 'react-router'

const Login = () => {
    return (
        <>
            <LoginContainer>
                <LoginContentContainer>
                    <LoginTitle>登录</LoginTitle>
                    <LoginForm>
                        <input type="text" placeholder="邮箱 / 玩家名" required />
                        <input type="password" placeholder="密码" required />
                        <button type="submit">登录</button>
                    </LoginForm>
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

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    margin-top: 20px;

    input {
        width: calc(85% - 30px);
        margin: 0 auto;
        margin-bottom: 15px;
        padding: 15px;
        border: none;
        background-color: var(--bg-secondary);
        border-radius: 4px;
        color: var(--text-primary);
        transition: all 0.3s ease;
    }

    input::placeholder {
        color: var(--text-secondary);
    }

    input:hover {
        transform: scale(1.02);
        outline: none;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    input:focus {
        transform: scale(1.05);
        outline: none;
        box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    }

    button {
        margin-top: 20px;
        width: 85%;
        padding: 10px;
        background-color: var(--btn-primary-bg);
        color: var(--btn-primary-text);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        text-align: center;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: var(--btn-primary-hover);
        transform: scale(1.05);
        box-shadow: var(--card-hover-shadow);
    }

    button:active {
        transform: scale(0.98);
        box-shadow: var(--card-active-shadow);
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
