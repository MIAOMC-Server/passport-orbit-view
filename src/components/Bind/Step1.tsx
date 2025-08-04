import React from 'react'
import { BindSubtitle, BindCardContainer, BindCard, BindTipsArea } from './styles'

interface Step1Props {
    onMethodSelect: (method: 'new' | 'existing') => void
}

const Step1: React.FC<Step1Props> = ({ onMethodSelect }) => {
    return (
        <>
            <BindSubtitle>
                步骤 1 / 3 <br />
                您希望我们怎么处理您的绑定?
            </BindSubtitle>
            <BindCardContainer>
                <BindCard onClick={() => onMethodSelect('new')}>
                    <h2>作为主要玩家</h2>
                    <p>
                        作为<span>主要玩家</span>绑定到<span>新的</span>MIAOMC账号
                    </p>
                </BindCard>
                <BindCard onClick={() => onMethodSelect('existing')}>
                    <h2>作为次要玩家</h2>
                    <p>
                        作为<span>次要玩家</span>绑定到<span>现有</span>MIAOMC账号
                    </p>
                </BindCard>
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

export default Step1
