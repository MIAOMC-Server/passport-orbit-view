import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import BackendRequest from '../utils/APIRequest'
import useQuery from '../hooks/useQuery'

export const Verify = () => {
    const query = useQuery()
    const data = query.get('data')
    const hash = query.get('hash')

    const [title, setTitle] = useState('请稍等，正在验证')
    const [subtitle, setSubtitle] = useState('验证中，请稍候...')
    const [isLoading, setIsLoading] = useState(true)
    const [isSuccess, setIsSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const verifyUser = async () => {
            if (!data || !hash) {
                setIsLoading(false)
                setIsSuccess(false)
                setTitle('验证失败')
                setSubtitle('缺少必要的参数')
                return
            }

            try {
                /*
                
                服务器返回内容示例：
                {
                    status: true,
                    data: {
                        bind_token: '<a bunch of token>'
                    },
                    next: 'Bind'
                }
                
                */
                const res = await BackendRequest.VerifyUserRequest(data, hash)
                if (res.status) {
                    setIsSuccess(true)
                    setTitle('验证成功')
                } else {
                    setIsSuccess(false)
                    setErrorMessage(res.message || '未知错误')
                    setSubtitle(res.message || '验证失败，请检查参数或稍后重试')
                    setTitle('验证失败')
                }
            } catch (error) {
                setIsSuccess(false)
                setErrorMessage('发生错误，请稍后重试')
                setSubtitle(errorMessage || '发生错误，请稍后重试')
                setTitle('验证失败，发生错误')
            } finally {
                setIsLoading(false)
            }
        }

        verifyUser()
    }, [data, hash])

    if (!isSuccess && !isLoading) {
        setTimeout(() => {
            window.close()
        }, 3000)
    }

    return (
        <VerifyContainer>
            <VerifyContentContainer>
                {isLoading && (
                    <VerifyLoadingSpinner
                        src="https://i1.mcobj.com/imgb/u1/20250801_688c7c7460f24.png"
                        alt="Loading..."
                    />
                )}
                <VerifyTitle>{title}</VerifyTitle>
                {isSuccess ? (
                    <VerifySubtitle>验证成功，正在跳转...</VerifySubtitle>
                ) : (
                    <VerifySubtitle>{subtitle || '验证失败，请检查参数或稍后重试'}</VerifySubtitle>
                )}
            </VerifyContentContainer>
        </VerifyContainer>
    )
}

export default Verify

const VerifyLoadingSpinner = styled.img`
    width: 100px;
    height: 100px;
    animation: spin 2s ease-in-out infinite;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

const VerifyContainer = styled.div`
    max-width: 960px;
    margin: 0 auto;
    width: 85%;
`

const VerifyContentContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: calc(100vh - 12rem);
    align-items: center;
    width: 100%;
    flex-direction: column;
`

const VerifyTitle = styled.h1`
    font-size: 48px;
    color: var(--text-primary);
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
`

const VerifySubtitle = styled.h2`
    font-size: 28px;
    color: var(--text-secondary);
    margin-top: 0.5rem;
    margin-bottom: 5rem;
`
