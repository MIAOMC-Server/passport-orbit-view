import React, { useState } from 'react'
import Form from '../common/Form/Form'
import { BindSubtitle, BindCardContainer, BindTipsArea } from './styles'

interface Step2NewProps {
    emailRef: React.MutableRefObject<HTMLInputElement | null>
    passwordRef: React.MutableRefObject<HTMLInputElement | null>
    codeRef: React.MutableRefObject<HTMLInputElement | null>
}

const Step2New: React.FC<Step2NewProps> = ({ emailRef, passwordRef, codeRef }) => {
    const [registerStep, setRegisterStep] = useState(1)

    return (
        <>
            <BindSubtitle>
                步骤 2 / 3 <br />
                作为<span>主要玩家</span>绑定到<span>新的</span>MIAOMC账号
            </BindSubtitle>
            <BindCardContainer>
                {registerStep === 1 ? (
                    <Form>
                        <input
                            type="email"
                            id="register-email"
                            placeholder="邮箱"
                            required
                            ref={emailRef}
                        />
                        <button
                            type="submit"
                            id="register-email-button"
                            onClick={() => setRegisterStep(2)}
                        >
                            发送邮件验证码
                        </button>
                    </Form>
                ) : (
                    <Form>
                        <input
                            type="password"
                            id="register-password"
                            placeholder="密码"
                            required
                            ref={passwordRef}
                        />
                        <input
                            type="text"
                            id="register-code"
                            placeholder="邮件验证码"
                            required
                            ref={codeRef}
                        />
                        <button type="submit">验证并绑定</button>
                    </Form>
                )}
            </BindCardContainer>
            <BindTipsArea>
                <p>
                    <a href="/about#bind" target="_blank" rel="noreferrer">
                        不知道怎么选择？
                    </a>
                </p>
            </BindTipsArea>
        </>
    )
}

export default Step2New
