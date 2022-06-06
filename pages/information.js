import React from 'react'
import {Col, Divider, Layout, List, Row} from 'antd'
import BottomNav from '../components/navbar/BottomNav'
import Head from 'next/head'


const {Content} = Layout

export default function informationMain() {

    const data = [
        'A "Rescue" is s stake pool operator that has been selected as a sponsor for Mellow Slothz NFTs',
        'A "Family" is a set of NFTs born from the sponsorship of a "Rescue". These have their own unique color backgrounds and the Rescue’s logo in the top corner as an identity marker.',
        'An "Adoption" is the minting process that happens on the "Adoption Papers" area of this website.',
    ]

    return (<>
        {/* page head */}
        <Head>
            <title>Information - Mellow Slothz</title>
        </Head>

        {/* content */}
        <Row className='bg-dark2 text-dark'>
            <Col xs={24} className='text-center'>
                <Content>
                    <main className='wrapper'>
                        <div
                            className='d-md-flex flex-md-equal justify-content-center align-items-center w-100 my-md-3 ps-md-3'>
                            <div className='p-lg-5 mx-auto my-5 text-white-50 text-center'>
                                <h1 className='display-1 fw-normal fw-bolder text-white'>Information</h1>
                                <br/>
                                <div className='d-flex justify-content-center align-items-center flex-column'>
                                    <p className='lead fw-bold text-center'>
                                        Mellow Slothz is an NFT project built on Cardano.
                                    </p>
                                    <p className='lead fw-bold text-left'>
                                        Our desire was to create a project that has appeal for more than one reason.
                                        <br/>
                                        Bringing ideas to life sometimes takes creative measures. Mellow Slothz is one
                                        such
                                        project.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id='more-info' className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                            <div className='bg-purple me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-scroll'>
                                <div className='my-3 p-3'>
                                    <h2 className='display-5 text-white text-capitalize'>{''}</h2>
                                </div>
                                <div className='bg-body shadow-sm mx-auto p-3'
                                     style={{width: '80vw', height: 'auto', borderRadius: '21px 21px 0 0'}}>

                                    {/* mission statement */}
                                    <div id='mission-statement'>
                                        <h1 className='display-5 text-capitalize'>Mission Statement</h1>
                                        <Divider/>
                                        <p className='lead text-black fw-normal text-left'>
                                            Mellow Slothz is here to provide art when available, value when possible,
                                            and
                                            opportunity where it can be utilized. We aim to always be fair and as open
                                            as
                                            possible when the community needs us to be so that Mellow Slothz is
                                            considered a
                                            respected member within the Cardano NFT community. We strive to support our
                                            small stake pool operators as much as we are able in order to promote
                                            healthy
                                            growth and decentralization on the network.
                                            <br/>
                                            <br/>
                                            Mellow Slothz is also committed to doing what we are able to with respect to
                                            the
                                            vulnerable sloth population. We will be donating at regular intervals to The
                                            Sloth Conservation Foundation in Costa Rica. We will continue to look for
                                            new
                                            missions to support as funds permit.
                                        </p>
                                        <br/>
                                        <br/>
                                    </div>


                                    {/* who we donate to */}
                                    <div id='who-we-donate-to'>
                                        <h1 className='display-5 text-capitalize'>Who we donate to</h1>
                                        <Divider/>
                                        <p className='lead text-black fw-normal text-left'>
                                            Mellow Slothz is starting off with donations to slothconservation.org who
                                            are
                                            doing great work to conserve and protect the sloth population in tropical
                                            areas.
                                            Sloths encounter many threats due to human encroachment into their habitable
                                            zones. These threats include direct human involvement such as hunting and
                                            capture for the illegal pet trade.
                                            <br/>
                                            <br/>
                                            Indirect threats arise from dogs, power
                                            transmission lines and distribution sites, and roadways when traversing
                                            areas of
                                            the rainforest. We urge you to visit The Sloth Conservation Foundation and
                                            read
                                            about how these threats endanger sloths and what the foundation is doing to
                                            protect them in our fast changing world.
                                        </p>
                                        <br/>
                                        <br/>
                                    </div>

                                    {/* future utility */}
                                    <div id='future-utility'>
                                        <h1 className='display-5 text-capitalize'>Future Utility</h1>
                                        <Divider/>
                                        <p className='lead text-black fw-normal text-left'>
                                            Mellow Slothz NFTs are being released in 5 sets of 3000 units each. Each set
                                            will be designated in support of a selected small stake pool organization.
                                            These
                                            stake pools, or ‘rescues’, will be the holders of the wallets that collect
                                            proceeds from the sale of Mellow Slothz. Each stake pool set will include
                                            the
                                            stake pool’s logo and a unique color background.
                                            <br/>
                                            <br/>
                                            Our goal in this is to spread awareness of small stake pools that need a
                                            little
                                            more support in the way of delegators in order to be selected for block
                                            rewards
                                            more consistently.
                                            <br/>
                                            <br/>
                                            In the future, holders of a Mellow Slothz NFT will be eligible for bonuses
                                            on
                                            WineGarden.io. These bonuses can be increased if the person utilizing
                                            WineGarden.io has at
                                            least one of each set in their wallet.
                                        </p>
                                        <br/>
                                        <br/>
                                    </div>

                                    {/* categorization info */}
                                    <div id='mellow-slothz-categories'>
                                        <h1 className='display-5 text-capitalize'>How Mellow Slothz are categorized</h1>
                                        <Divider/>
                                        <p className='lead text-black text-left'>
                                            <List
                                                header={<div className='fw-bold text-info-purp'>Recues, Families, and
                                                    Adoptions...</div>}
                                                footer={null}
                                                bordered
                                                dataSource={data}
                                                renderItem={item => (
                                                    <List.Item className=' fw-bold'>
                                                        {item}
                                                    </List.Item>
                                                )}
                                            />
                                        </p>
                                        <br/>
                                        <br/>
                                    </div>

                                    <BottomNav/>
                                    <br/>
                                    <br/>
                                    <p className='lead black-50'>
                                        The foundation does not take donations directly, but instead uses a third party
                                        to
                                        convert crypto to cash for their use.
                                    </p>
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
