import { useRef, useState } from 'react'
import BackgroundText from '../../components/common/BackgoundText/BackgroundText'
import { BindContainer, BindContentContainer, BindTitle } from '../../components/Bind/styles'
import Step1 from '../../components/Bind/Step1'
import Step2New from '../../components/Bind/Step2New'
import Step2Existing from '../../components/Bind/Step2Existing'

const Bind = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [bindMethod, setBindMethod] = useState<'new' | 'existing'>('new')

    // 创建所需的 refs
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const codeRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const loginPasswordRef = useRef<HTMLInputElement>(null)

    const handleMethodSelect = (method: 'new' | 'existing') => {
        setBindMethod(method)
        setCurrentStep(2)
    }

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 onMethodSelect={handleMethodSelect} />
            case 2:
                return bindMethod === 'new' ? (
                    <Step2New emailRef={emailRef} passwordRef={passwordRef} codeRef={codeRef} />
                ) : (
                    <Step2Existing usernameRef={usernameRef} passwordRef={loginPasswordRef} />
                )
            default:
                return null
        }
    }

    return (
        <>
            <BindContainer>
                <BindContentContainer>
                    <BindTitle>绑定</BindTitle>
                    {renderCurrentStep()}
                </BindContentContainer>
            </BindContainer>
            <BackgroundText text="BIND" />
        </>
    )
}

export default Bind
