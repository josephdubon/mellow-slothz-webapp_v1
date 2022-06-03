import React from 'react'
import {Layout} from 'antd'
import NavBar from '../navbar/NavBar'
import FooterGlobal from '../footer/Footer'

const {Header, Content, Footer} = Layout

export default function MainLayout({children}) {
    return (<>
        <Layout className='layout'>
            {/* navigation */}
            <Header>
                <NavBar/>
            </Header>

            {/* main content */}
            <Content>
                <div>
                    {children}
                </div>
            </Content>

            {/* footer */}
            <FooterGlobal/>
        </Layout>
    </>)
}