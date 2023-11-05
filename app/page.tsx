import React, { CSSProperties } from 'react';
import { Col, ConfigProvider, Row } from 'antd';
import Header from '@/components/header'
import theme from '@/theme/themeConfig';
import Meta from 'antd/es/card/Meta';
import Footer from '@/components/footer';
import {default as Button} from '@/components/button'
import {default as Card, SimpleCard} from '@/components/card';

import styles from './page.module.css';
import Gallery from '@/components/gallery';


import { faPhone, faLocationDot, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const reviews: {profileImg: string, name: string, reviewDate: string, reviewDetails: string}[] = [
  {
    profileImg: "https://lh3.googleusercontent.com/a-/AD_cMMT2mJBg784j7l7C5rpd0LjuCCoiB4qG4gyVg6YtCBYOKA=s120-c-rp-mo-br100",
    name: "Abby Rhodes",
    reviewDate: "2023-06-28",
    reviewDetails: "Amazing!!! My lashes are naturally so blonde you can barely see them. Nicole did amazing and 4 weeks later, they are still dark and curled. This image was when i first got them done! 🙂 thank you Nicole!!!!!!!"
  },
  {
    profileImg: "https://lh3.googleusercontent.com/a-/AD_cMMRTkLXmYEulQv4EmARtjn8qv_lT0mRs2399CAbXjfmMeBI=s120-c-rp-mo-br100",
    name: "Michaela Vogt",
    reviewDate: "2023-05-22",
    reviewDetails: "I’ve had my lashes done a couple times before but Nichole is definitely the best lash tech I’ve had super knowledgeable and friendly!"
  }
]

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Header></Header>
      {/* cover */}
      <div className={styles.cover} style={{ backgroundImage: 'url("https://delashstudio.us/wp-content/uploads/2023/08/eyelash-extension-procedure-woman-eye-with-long-eyelashes-lashes-close-up-selected-focus.jpg")', backgroundSize: 'cover', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ fontFamily: 'Georgia, Sans-serif', fontSize: 80, fontWeight: 'lighter', padding: 20, textAlign: 'center' }}>Eons Lash & Brow</h1>
        <div style={{ display: 'flex', gap: 20 }}>
          <Button style={{ backgroundColor: 'transparent', border: '1px black solid' }}>Book Now</Button>
          <Button style={{ backgroundColor: 'transparent', border: '1px black solid' }}>Call Us Now</Button>
        </div>
      </div>
      {/* info */}
      <div style={{ backgroundImage: 'url("https://delashstudio.us/wp-content/uploads/2023/08/palm-leaf-shadow-sand-top-view-copy-space.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: 50, backgroundRepeat: 'no-repeat' }}>
        <Row gutter={[8, 8]} style={{ display: 'flex', textAlign: 'center', maxWidth: 1140, margin: 'auto', padding: 10 }}>
          <Col xs={24} md={8}><FontAwesomeIcon icon={faPhone} width={14} style={{ verticalAlign: 'middle', marginRight: 5 }} /><span>(832) 422-7017</span></Col>
          <Col xs={24} md={8}><FontAwesomeIcon icon={faLocationDot} width={12} style={{ verticalAlign: 'middle', marginRight: 5 }} /><span>11690 Spring Cypress Rd, Ste 300, Cypress, Texas</span></Col>
          <Col xs={24} md={8}><FontAwesomeIcon icon={faEnvelope} width={14} style={{ verticalAlign: 'middle', marginRight: 5 }} /><span>eonlashandbrow@gmail.com</span></Col>
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

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <h1 style={{ textAlign: 'center' }}>What our clients are saying</h1>
          <Button>Write A Review</Button>
          <div style={{ marginTop: 20 }}>
            <span style={{ fontSize: 14, fontWeight: 'bold' }}>EXCELLENT</span>
            <FiveStar color='#f6bb06'/>
            <span style={{ fontWeight: 'bold', fontSize: 13 }}>32 reviews </span>
            <span style={{ fontSize: 13, marginRight: 10 }}>on</span>
            <span><img style={{ height: '20px', verticalAlign: 'middle' }} src='https://delashstudio.us/wp-content/plugins/wp-reviews-plugin-for-google/static/img/platform/logo.svg?ver=do-not-care-10.5'></img></span>
          </div>
          <div>
            {reviews.map(review => <div key={1} style={{ display: 'flex', flexDirection: 'column', margin: 10, position: 'relative', paddingBottom: 40 }}>
              <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                <img src={review.profileImg} style={{ width: 40, height: 40 }}></img>
                <div>
                  <p style={{ fontWeight: 'bold', fontSize: 14 }}>{review.name}</p>
                  <p style={{ fontSize: 12, color: '#666' }}>{review.reviewDate}</p>
                </div>
                <img style={{ marginLeft: 'auto', marginRight: 10, width: 20 }} src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"></img>
              </div>
              <FiveStar color='gold' style={{ marginLeft: 0, }}/>
              <p>{review.reviewDetails}</p>
            </div>)}
            {/* <div key={1} style={{ display: 'flex', flexDirection: 'column', margin: 10, position: 'relative' }}>
              <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                <img src={reviews.at(0)?.profileImg} style={{ width: 40, height: 40 }}></img>
                <div>
                  <p style={{ fontWeight: 'bold', fontSize: 14 }}>{reviews.at(0)?.name}</p>
                  <p style={{ fontSize: 12, color: '#666' }}>{reviews.at(0)?.reviewDate}</p>
                </div>
                <img style={{ marginLeft: 'auto', marginRight: 10, width: 20 }} src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"></img>
              </div>
              <FiveStar color='gold' style={{ marginLeft: 0, }}/>
              <p>{reviews.at(0)?.reviewDetails}</p>
            </div> */}
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </div>
  </ConfigProvider>
);

export default HomePage;

function FiveStar(props: {color?: string, style?: CSSProperties}) {
  return <span style={{ margin: 10, ...props.style }}>
    <FontAwesomeIcon icon={faStar} color={props.color} width={17} />
    <FontAwesomeIcon icon={faStar} color={props.color} width={17} />
    <FontAwesomeIcon icon={faStar} color={props.color} width={17} />
    <FontAwesomeIcon icon={faStar} color={props.color} width={17} />
    <FontAwesomeIcon icon={faStar} color={props.color} width={17} />
  </span>
}