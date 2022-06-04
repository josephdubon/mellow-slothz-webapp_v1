import React from 'react'
import {Col, Layout, Row} from 'antd'
import Image from 'next/image'
import BottomNav from '../components/navbar/BottomNav'


const {Header, Content, Footer} = Layout

export default function IndexMain() {
    return (<>
        <Row className='bg-dark2 text-dark'>
            <Col xs={24} className='text-center'>
                <Content>
                    <main className='wrapper'>
                        <div
                            className='d-md-flex flex-md-equal justify-content-center align-items-center w-100 my-md-3 ps-md-3'>
                            <div className='p-lg-5 mx-auto my-5 text-white-50 text-center'>
                                <h1 className='display-1 fw-normal fw-bolder text-white'>Mellow Slothz</h1>
                                <h4 className='display-6 fw-normal fw-bold text-white'>smooth, refined, and set to
                                    HODL</h4>
                                <br/>
                                <p className='lead fw-bold'>
                                    We are Mellow Slothz… mellow. calm. purposeful.
                                </p>
                                <p className='lead fw-normal'>
                                    We are an NFT project built on the Cardano Blockchain.
                                    <br/>
                                    Home to some of the most creative cNFT
                                    projects in the crypto space.
                                </p>
                                <a className='btn btn-outline-light text-capitalize' href='#mellow-slothz-art'>Check out
                                    our art</a>{' | | '}
                                <a className='btn btn-outline-info text-capitalize' href='#why-are-we-doing-this'>Why are we doing
                                    this?</a>
                            </div>

                            {/* art col */}
                            <div
                                className='d-md-flex justify-content-center sp-lg-5 mx-auto my-5 p-5'>
                                <Image
                                    src='/images/Mellow_Slothz_Base.png'
                                    alt='Mellow Slothz'
                                    width='600'
                                    height='600'
                                />
                            </div>
                        </div>

                        <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                            <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
                                <div className='my-3 p-3'>
                                    <h2 className='display-5'>Sample Art</h2>
                                    <p className='lead'>And an even wittier subheading.</p>
                                </div>
                                <div className='bg-dark shadow-sm mx-auto'
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>{''}</div>
                            </div>
                            <div
                                className='bg-blue me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden'>
                                <div className='my-3 py-3'>
                                    <h2 className='display-5 text-white'>Base Art</h2>
                                    <p className='lead text-white-50'>And an even wittier subheading.</p>
                                </div>
                                <div className='bg-light shadow-sm mx-auto'
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>{''}</div>
                            </div>
                        </div>

                        <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                            <div className='bg-purple me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden'>
                                <div className='my-3 p-3'>
                                    <h2 className='display-5 text-white'>Why are we doing this?</h2>
                                    <p className='lead text-white-50'>And an even wittier subheading.</p>
                                </div>
                                <div className='bg-body shadow-sm mx-auto'
                                     style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}>{''}</div>
                            </div>
                        </div>
                    </main>
                </Content>
            </Col>

            <Col xs={20} sm={16} md={12} lg={8} xl={4}>

            </Col>

            <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                Col
            </Col>
        </Row>
    </>)
}
