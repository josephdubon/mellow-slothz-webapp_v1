import React from 'react'
import {Card, Col, Divider, Layout, Row} from 'antd'
import Image from 'next/image'
import Head from 'next/head'
import BottomNav from '../components/navbar/BottomNav'
import IconList from '../components/social/IconList'
import {FaArrowAltCircleDown} from 'react-icons/fa'
import Link from 'next/link'


const {Content} = Layout

export default function IndexMain() {
    return (<>
        {/* page head */}
        <Head>
            <title>Mellow Slothz</title>
        </Head>

        {/* content */}
        <Row className='bg-dark2 text-dark'>
            <Col xs={24} className='text-center'>
                <Content>
                    <main className='wrapper'>
                        <div
                            className='fullscreen d-md-flex flex-md-equal justify-content-center align-items-center w-100 my-md-3 ps-md-3 '>
                            <div className='p-lg-5 mx-auto my-5 text-white-50 text-center'>
                                <h1 className='display-1 fw-bolder text-white'>Mellow Slothz</h1>
                                <h4 className='display-6 fw-bold text-white'>smooth, refined, and set to
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
                                <Link href={'#mellow-slothz-art'}>
                                    <a className='btn btn-outline-light btn-space text-capitalize'>Check out
                                        our art</a>
                                </Link>
                                <Link href={'#why-are-we-doing-this'}>
                                    <a className='btn btn-outline-info btn-space text-capitalize'>Why are we doing
                                        this?</a>
                                </Link>
                                <br/><br/>

                                {/* socials */}
                                <IconList/>

                                {/*  scroll icon */}
                                <Link href={'#mellow-slothz-art'}>
                                    <a>
                                        <FaArrowAltCircleDown className='icon-list scroll-arrow' size='3rem'/>
                                    </a>
                                </Link>
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

                        <div id='mellow-slothz-art' className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                            <div className='me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center'>
                                <div className='my-3 p-3'>
                                    <h2 className='display-5 text-white'>Sample Art</h2>
                                    <Divider/>
                                </div>
                                <div className='bg-gradient mx-auto'
                                     style={{width: '80%', height: '600px', borderRadius: '21px 21px 0 0'}}>
                                    {''}
                                </div>
                            </div>
                        </div>

                        <div id='why-are-we-doing-this' className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                            <div className='me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-scroll mt-5'>
                                <div className='my-3 p-3'>
                                    <h2 className='display-5 text-white'>Why are we doing this?</h2>
                                    <p className='lead text-white-50'>mellowslothz.com</p>
                                </div>
                                <div className='mx-auto p-3'>
                                    <Card className='content' bordered={true}>

                                        <p className='lead text-white fw-bold text-center'>
                                            Mellow Slothz is an NFT project built on Cardano.
                                        </p>
                                        <p className='lead text-white-50 text-left'>
                                            Our desire was to create a project that has appeal for more than one reason.
                                            <br/>
                                            Bringing ideas to life sometimes takes creative measures. <span
                                            className='fw-bold'>Mellow Slothz</span> is one
                                            such project.
                                            <br/>
                                            <br/>

                                            Do you like our artwork for its visual appeal, or want to support small
                                            stake
                                            pool operators in their goal to decentralize and offer unique values?
                                            <br/>
                                            We aim to provide future utility and provide donations to support vulnerable
                                            sloth populations. We are not going to build just another metaverse.
                                            <br/>
                                            <br/>
                                            <span
                                                className='fw-bold'>Mellow Slothz</span> aims to bring small stake pools
                                            along for a ride that will include
                                            expansion for them by the way of new delegators and an <span
                                            className='fw-bold'>ISPO</span> opportunity for a
                                            new project building on Cardano.
                                            <br/>
                                            <br/>
                                            We are excited to bring our project to you and hope that you will follow us
                                            on
                                            social media through our journey. Remember that we will not message you
                                            directly
                                            on any social media unless you contact us directly through official
                                            channels.
                                            All messaging and possible promotions will be made public and we will never
                                            contact you first.
                                            <br/>
                                            <br/>
                                        </p>
                                    </Card>
                                </div>
                                <BottomNav/>
                            </div>
                        </div>
                    </main>
                </Content>
            </Col>
        </Row>
    </>)
}
