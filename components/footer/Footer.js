import React from 'react'
import {Layout} from 'antd'

const {Header, Content, Footer} = Layout

export default function FooterGlobal() {
    return (<>
        <Layout className='layout'>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                MellowSlothz © {new Date().getFullYear()}
            </Footer>
        </Layout>
    </>)
}
