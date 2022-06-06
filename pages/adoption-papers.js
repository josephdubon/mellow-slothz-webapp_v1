import React from 'react'
import {Col, Layout, Row} from 'antd'
import BottomNav from '../components/navbar/BottomNav'
import Head from 'next/head'


const {Content} = Layout

export default function AdoptionMain() {
    return (<>
        {/* page head */}
        <Head>
            <title>Adoption Papers - Mellow Slothz</title>
        </Head>

        {/* content */}
        <Row className='bg-dark2 text-dark'>
            <Col xs={24} className='text-center'>
                <Content>
                    <main className='wrapper'>
                        <div
                            className='d-md-flex flex-md-equal justify-content-center align-items-center w-100 my-md-3 ps-md-3'>
                            <div className='p-lg-5 mx-auto my-5 text-white-50 text-center'>
                                <h1 className='display-1 fw-normal fw-bolder text-white'>Adoption Papers</h1>
                                <h4 className='display-6 fw-normal fw-bold text-white'>Page in development...</h4>
                                <br/>
                                <p className='lead fw-bold'>
                                    Please check back soon.
                                </p>
                            </div>

                        </div>

                        <div id='more-info' className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                            <div className='bg-gradient me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-scroll'>
                                <div className='my-3 p-3'>
                                    <h2 className='display-5 text-white'>Thank you for visiting.</h2>
                                </div>
                                <div className='shadow-sm mx-auto p-5'>

                                    <p className='lead text-black fw-bold text-center'>
                                        {' '}
                                    </p>
                                    <BottomNav/>
                                </div>
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
