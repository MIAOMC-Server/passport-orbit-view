import React from 'react'
import Form from '../common/Form/Form'
import { BindSubtitle, BindCardContainer, BindTipsArea } from './styles'

interface Step2ExistingProps {
    usernameRef: React.MutableRefObject<HTMLInputElement | null>
    passwordRef: React.MutableRefObject<HTMLInputElement | null>
}

const Step2Existing: React.FC<Step2ExistingProps> = ({ usernameRef, passwordRef }) => {
    return (
        <>
            <BindSubtitle>
                步骤 2 / 3 <br />
                作为<span>次要玩家</span>绑定到<span>现有</span>MIAOMC账号
            </BindSubtitle>
            <BindCardContainer>
                <Form>
                    <input type="text" placeholder="邮箱 / 玩家名" required ref={usernameRef} />
                    <input type="password" placeholder="密码" required ref={passwordRef} />
                    <button type="submit">登录</button>
                </Form>
            </BindCardContainer>
            <BindTipsArea>
                <p>
                    <a href="/about#forgot-password" target="_blank" rel="noreferrer">
                        忘记密码
                    </a>
                    <a href="/about#register" target="_blank" rel="noreferrer">
                        如何注册
                    </a>
                </p>
            </BindTipsArea>
        </>
    )
}

export default Step2Existing
