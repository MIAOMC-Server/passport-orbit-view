import styled from '@emotion/styled'

const BackgroundText = ({ text }: { text: string | 'PAGE' }) => {
    return <LoginBackground>{`<${text.toUpperCase()}>`}</LoginBackground>
}

export default BackgroundText

const LoginBackground = styled.div`
    position: absolute;
    align-items: center;
    top: 20%;
    left: 20%;
    transform: translate(-50%, -50%);
    font-size: 128px;
    z-index: -1;
    font-style: italic;
    font-family: 'pingfang SC', 'Microsoft YaHei', '微软雅黑', sans-serif, Arial, sans-serif;
    font-weight: 1000;
    opacity: 0.1;
    user-select: none;
    color: var(--text-primary);
`
