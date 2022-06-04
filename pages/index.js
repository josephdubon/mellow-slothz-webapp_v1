import React from 'react'
import {Col, Layout, Row} from 'antd'
import Image from 'next/image'
import BottomNav from '../components/navbar/BottomNav'


const {Header, Content, Footer} = Layout

export default function () {
    return (<>
        <Row className='bg-dark2 text-dark'>
            <Col xs={24} className='text-center'>
                <Content>
                    <main>
                        <div className='position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center text-white-50'>
                            <Row>
                                <Col sm={24} md={24} lg={12} className='p-lg-5 mx-auto my-5 text-left'>
                                    <h1 className='display-1 fw-normal fw-bolder text-white'>Mellow Slothz</h1>
                                    <h4 className='display-6 fw-normal fw-bold text-white'>smooth, refined, and set to
                                        HODL</h4>
                                    <p className='lead fw-normal'>
                                        We are Mellow Slothz…
                                        <br/>
                                        <br/>
                                        Mellow Slothz is a CNFT project built on Cardano, home to some of the most
                                        creative cNFT projects in the crypto space.
                                    </p>
                                    <p className='lead fw-normal'>
                                        The idea for MS came from the idea that being successful in crypto means staying
                                        calm, thinking it through, and not reacting like a nub when the market changes
                                        suddenly.
                                    </p>
                                    <p className='lead fw-bold'>
                                        Mellow. Calm. Purposeful.
                                    </p>
                                    <p className='lead fw-normal'>
                                        A Sloth acts the same way most of the time.
                                        <br/>
                                        <br/>
                                        A Sloth is also very strong. Hanging from trees all day will do that. Those
                                        claws will grip hard and not let go without a struggle.
                                    </p>
                                    <p className='lead fw-normal'>
                                        If you are into Cardano, you likely have a hard time letting go as well. The
                                        best real life projects are being built and funded on Cardano.
                                    </p>
                                    <p className='lead fw-normal'>
                                        Mellow Slothz is a constant reminder of the resilience we have against
                                        negativity and FUD, and just how lucky we are to be here.
                                    </p>
                                    <a className='btn btn-outline-secondary' href='#'>Coming soon</a>
                                </Col>
                                <Col className='col-md-5 p-lg-5 mx-auto my-5 col-sm'>
                                    <Image src='/images/Mellow_Slothz_Base.png' alt='me' width='800' height='800'/>
                                    <p className='small'>
                                        Keep return for updates and previews. We will update this page as more
                                        becomes available.
                                    </p>
                                    <p className='small'>
                                        Twitter, Discord, and Reddit links will be posted soon.
                                    </p>
                                </Col>
                            </Row>

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
