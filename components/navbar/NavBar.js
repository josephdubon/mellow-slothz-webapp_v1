import {useEffect, useState} from 'react'
import Link from 'next/link'
import useRouter from 'next/router'
import {Menu} from 'antd'

import {AppstoreOutlined, TeamOutlined} from '@ant-design/icons'


// de-structure item from menu
const {Item, ItemGroup, SubMenu} = Menu

export default function NavBar() {
    // set state for current page/link
    const [currentPage, setCurrentPage] = useState('')
    const isServer = () => typeof window !== 'undefined'

    const router = useRouter

    // update state on page change
    useEffect(() => {
        // process.browser is depreciated use typeof instead
        isServer() && setCurrentPage(window.location.pathname)
    }, [isServer() && window.location.pathname])

    return (<>
        <Menu
            theme='dark'
            mode='horizontal'
            selectedKeys={[currentPage]}
            defaultSelectedKeys={[currentPage]}
            items={new Array(15).fill(null).map((_, index) => {
                const key = index + 1
                return {
                    key,
                    label: `nav ${key}`,
                }
            })}
            className='mb-2'
        >
            {/* nav items */}
            <Item
                key='/'
                onClick={(e) => {
                    setCurrentPage(e.key)
                }}
                icon={<AppstoreOutlined/>}
            >
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </Item>

            <Item
                key='/adoption'
                icon={<TeamOutlined/>}
                onClick={(e) => {
                    setCurrentPage(e.key)
                }}
            >
                <Link href='/adoption'>
                    <a>Adoption</a>
                </Link>
            </Item>

            <Item
                key='/information'
                icon={<TeamOutlined/>}
                onClick={(e) => {
                    setCurrentPage(e.key)
                }}
            >
                <Link href='/information'>
                    <a>Information</a>
                </Link>
            </Item>

            <Item
                key='/contact'
                icon={<TeamOutlined/>}
                onClick={(e) => {
                    setCurrentPage(e.key)
                }}
            >
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </Item>

        </Menu>
    </>)
}
