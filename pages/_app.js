import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Head from 'next/head'

import MainLayout from '../components/layout/MainLayout'
import {Layout} from 'antd'
import {useEffect} from 'react'


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
