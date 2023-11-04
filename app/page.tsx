import React from 'react';
import { Col, ConfigProvider, Row } from 'antd';
import Header from '@/components/header'
import theme from '@/theme/themeConfig';
import Meta from 'antd/es/card/Meta';
import Footer from '@/components/footer';
import {default as Button} from '@/components/button'
import {default as Card, SimpleCard} from '@/components/card';

import styles from './page.module.css';
import Gallery from '@/components/gallery';


const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Header></Header>
      {/* cover */}
      <div style={{ backgroundImage: 'url("https://delashstudio.us/wp-content/uploads/2023/08/eyelash-extension-procedure-woman-eye-with-long-eyelashes-lashes-close-up-selected-focus.jpg")', backgroundSize: 'cover', backgroundPositionY: -290, minHeight: '87vh', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontFamily: 'Georgia, Sans-serif', fontSize: 80, fontWeight: 'lighter', padding: 20 }}>Eons Lash & Brow</h1>
        <div style={{ display: 'flex', gap: 20 }}>
          <Button style={{ backgroundColor: 'transparent', border: '1px black solid' }}>Book Now</Button>
          <Button style={{ backgroundColor: 'transparent', border: '1px black solid' }}>Call Us Now</Button>
        </div>
      </div>
      {/* info */}
      <div style={{ backgroundImage: 'url("https://delashstudio.us/wp-content/uploads/2023/08/palm-leaf-shadow-sand-top-view-copy-space.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 50, backgroundRepeat: 'no-repeat' }}>
        <Row gutter={[8, 8]} style={{ display: 'flex', textAlign: 'center', maxWidth: 1140, margin: 'auto', padding: 10 }}>
          <Col xs={24} md={8}><span>(832) 422-7017</span></Col>
          <Col xs={24} md={8}><span>11690 Spring Cypress Rd, Ste 300, Cypress, Texas</span></Col>
          <Col xs={24} md={8}><span>eonlashandbrow@gmail.com</span></Col>
        </Row>
      </div>
      {/* content */}
      <div style={{ maxWidth: 1140, margin: 'auto' }}>
        {/* about us */}
        <Row>
          <Col xs={24} md={12} style={{ alignItems: 'center', display: 'flex' }}>
            <div className={styles.content} style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h1>About Us</h1>
              <p>Your search for the best lash studio in your area ends with De’ lash studio. You’ve found it, with these amazing services that are offered at a great price. You will love how much attention you get from our skilled and licensed staff when you visit this fantastic lash studio. We promise to deliver the beauty and the attention you deserve, which you might not have gotten at other lash studios.</p>
              <div>
                <Button style={{ width: 'fit-content' }}>Read More</Button>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div style={{ backgroundColor: "#F6EEDF", transform: 'translate(15px, -15px)', margin: 40 }}>
              <div style={{ transform: 'translate(-30px, 30px)' }}>
                <img src='https://delashstudio.us/wp-content/uploads/2023/08/eyelash-extension-procedure-close-up.jpg' style={{ maxWidth: '100%' }}></img>
              </div>
            </div>
          </Col>
        </Row>
        {/* gallery */}
        <div style={{ marginTop: 50, marginBottom: 50 }}>
          <h1 className={styles.section}>Gallery</h1>
          <Gallery></Gallery>
        </div>
        {/* services */}
        
        <h1 className={styles.section}>Our Services</h1>
        <div style={{ margin: 20 }}>
          <Row gutter={[40, 24]} style={{ paddingBottom: 30}}>
            <Col xs={24} md={8}>
              <Card
                imageUrl='https://delashstudio.us/wp-content/uploads/2023/08/tai-xuong-2.jpg'
                title="Lashes"
                description="The newest and most innovative way to get the lashes you've always dreamed of. With this all-natural, semi-permanent procedure, you can get the appearance of fuller, thicker eyelashes without the use of any leave-on chemicals or extensions."
              >
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                imageUrl='https://delashstudio.us/wp-content/uploads/2023/08/tai-xuong-1.jpg'
                title="Facial"
                description="Skincare product that cleanses, exfoliates, and nourishes the skin, promoting a clear, well-hydrated complexion. Our Facial is perfect for those who want to promote a healthy, youthful look and can help your skin look younger."
              >
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                imageUrl='https://delashstudio.us/wp-content/uploads/2023/08/tai-xuong.jpg'
                title="Lashes"
                description="This simple and effective hair removal product is perfect for removing unwanted body hair quickly and easily. Apply the wax to the area you want to remove hair from, let it sit for a few minutes, then remove it and pull out the hair from the follicle."
              >
              </Card>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center'}}>
            <Button>View More</Button>
          </Row>
        </div>
        {/* how it works */}
        <h1 className={styles.section}>How It Works</h1>
        <div style={{ margin: 20 }}>
          <Row gutter={[40, 24]} style={{ paddingBottom: 30, display: 'flex', alignItems: 'flex-end'}}>
            <Col xs={24} md={8}>
              <SimpleCard
                title="Step 1"
                description="Menu and Appointment. Please browse our menu service and pick your best selections. Highly recommend calling to make an appointment and letting us know what you are looking for."
              >
              </SimpleCard>
            </Col>
            <Col xs={24} md={8}>
              <SimpleCard
                title="Step 2"
                description="Talk to our professional staff for review different styles of lashes or select a service at your appointment. We will help you apply your desired service."
              >
              </SimpleCard>
            </Col>
            <Col xs={24} md={8}>
              <SimpleCard
                title="Step 3"
                description="Sit back and relax. Let us do the rest."
              >
              </SimpleCard>
            </Col>
          </Row>
        </div>

        <Row style={{ paddingBottom: 40 }}>
          <Col xs={24} md={12}>
            <div style={{ backgroundColor: "#F6EEDF", transform: 'translate(15px, -15px)', margin: 40 }}>
              <div style={{ transform: 'translate(-30px, 30px)' }}>
                <img src='https://delashstudio.us/wp-content/uploads/2023/08/woman-eye-with-long-eyelashes-eyelash-extension-1.jpg' style={{ maxWidth: '100%' }}></img>
              </div>
            </div>
          </Col>
          <Col xs={24} md={12} style={{ alignItems: 'center', display: 'flex' }}>
            <div className={styles.content} style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h1>Feel Like A Queen</h1>
              <span>We offer the best eyelash extensions in Katy in a comfortable and relaxing environment. Eyelash extensions are a great way to add length and volume to your natural lashes. It lasts between 3-4 weeks, looks natural, and enhances the beauty of your eyes. Our products allow you to choose from various styles and lengths to fit your eye shape and thickness. Once applied, you will notice an immediate transformation. Longer, fuller, and curvier eyelashes will make your eyes pop with beauty.</span>
              <Button style={{ width: 'fit-content' }}>Read More</Button>
            </div>
          </Col>
        </Row>


        {/* <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h1>What our clients are saying</h1>
          <Button>Write A Review</Button>
          <span>EXCELLENT 32 reviews on Google</span>
        </div> */}
      </div>
      
      <Footer></Footer>
    </div>
  </ConfigProvider>
);

export default HomePage;