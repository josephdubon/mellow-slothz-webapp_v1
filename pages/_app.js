import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'

import MainLayout from '../components/layout/MainLayout'
import {Layout} from 'antd'
import {useEffect} from 'react'


export default function MyApp({Component, pageProps}) {
    // add this for bootstrap js components to render correctly
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap')
    }, [])

    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <title>Mellow Slothz</title>
            </Head>
            <Layout className='layout'>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Layout>
        </>
    )
}