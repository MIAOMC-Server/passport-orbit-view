import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

const CommonLayout = () => {
    return (
        <LayoutContainer>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </LayoutContainer>
    )
}

export default CommonLayout

const LayoutContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

const MainContent = styled.main`
    flex: 1;
    overflow-y: auto;
`
