import styled from '@emotion/styled'

const Footer = () => {
    const { VITE_COPYRIGHT, VITE_ICP_LICENSE } = import.meta.env

    let copyright = VITE_COPYRIGHT
    if (copyright.includes('{currentYear}')) {
        const currentYear = new Date().getFullYear()
        copyright = copyright.replace('{currentYear}', currentYear.toString())
    }

    return (
        <footer>
            <FooterContainer>
                <FooterColumn>
                    <FooterCopyright>{copyright}</FooterCopyright>
                    <FooterICP>
                        <a
                            href="https://beian.miit.gov.cn/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {VITE_ICP_LICENSE}
                        </a>
                    </FooterICP>
                </FooterColumn>
            </FooterContainer>
        </footer>
    )
}

export default Footer

const FooterContainer = styled.div`
    height: 3rem;
    background-color: var(--bg-primary);
    user-select: none;
    width: 100%;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
    user-select: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(2px);
`

const FooterColumn = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    height: 100%;
    align-items: center;
`

const FooterCopyright = styled.div`
    font-size: 0.8rem;
    color: var(--text-primary);
`

const FooterICP = styled.div`
    font-size: 0.8rem;
    color: var(--text-primary);

    a {
        color: var(--text-primary);
        text-decoration: none;
    }
`
