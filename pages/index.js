import React from 'react'
import {Col, Layout, Row} from 'antd'
import Image from 'next/image'


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

const content = {
  marginTop: '100px',
}

export default function Home() {
  return (
    <div style={content}>
      <div className="text-center mb-5">
        <Link href="#">
          <a className="logo mr-0">
            <SmileFilled size={48} strokeWidth={1} />
          </a>
        </Link>

        <p className="mb-0 mt-3 text-disabled">Welcome to the world !</p>
      </div>
      <div>
        <Form layout="horizontal">
          <FormItem
            label="Input Number"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <InputNumber
              size="large"
              min={1}
              max={10}
              style={{ width: 100 }}
              defaultValue={3}
              name="inputNumber"
            />
          </FormItem>

          <FormItem
            label="Switch"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Switch defaultChecked name="switch" />
          </FormItem>

          <FormItem
            label="Slider"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Slider defaultValue={70} />
          </FormItem>

          <FormItem
            label="Select"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <Select
              size="large"
              defaultValue="lucy"
              style={{ width: 192 }}
              name="select"
            >
              <Option value="jack">jack</Option>
              <Option value="lucy">lucy</Option>
              <Option value="disabled" disabled>
                disabled
              </Option>
              <Option value="yiminghe">yiminghe</Option>
            </Select>
          </FormItem>

          <FormItem
            label="DatePicker"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 8 }}
          >
            <DatePicker name="startDate" />
          </FormItem>
          <FormItem
            style={{ marginTop: 48 }}
            wrapperCol={{ span: 8, offset: 8 }}
          >
            <Button size="large" type="primary" htmlType="submit">
              OK
            </Button>
            <Button size="large" style={{ marginLeft: 8 }}>
              Cancel
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  )
}
