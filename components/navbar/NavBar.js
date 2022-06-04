import {useEffect, useState} from 'react'
import Link from 'next/link'
import {Layout, Menu} from 'antd'
import {CodeFilled, HomeFilled, InfoCircleFilled} from '@ant-design/icons'

const {Header} = Layout


// de-structure item from menu
const {Item} = Menu

export default function NavBar() {
    // set state for current page/link
    const [currentPage, setCurrentPage] = useState('')
    const isServer = () => typeof window !== 'undefined'

    // update state on page change
    useEffect(() => {
        // process.browser is depreciated use typeof instead
        isServer() && setCurrentPage(window.location.pathname)
    }, [isServer() && window.location.pathname])

    return (<>
        <div className='d-flex justify-content-start'>
            <Header className='header'>
                <Link href='/'><a>
                    <div className='logo'>Mellow Slothz</div>
                </a></Link>
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
                        icon={<HomeFilled/>}
                    >
                        <Link href='/'>
                            <a>Home</a>
                        </Link>
                    </Item>

                    <Item
                        key='/information'
                        icon={<InfoCircleFilled/>}
                        onClick={(e) => {
                            setCurrentPage(e.key)
                        }}
                    >
                        <Link href='/information'>
                            <a>Information</a>
                        </Link>
                    </Item>

                    <Item
                        key='/adoption-papers'
                        icon={<CodeFilled/>}
                        onClick={(e) => {
                            setCurrentPage(e.key)
                        }}
                    >
                        <Link href='/adoption-papers'>
                            <a>Adoption Papers</a>
                        </Link>
                    </Item>
                </Menu>
            </Header>
        </div>
    </>)
}
