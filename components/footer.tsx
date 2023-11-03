import { Col, Row, theme } from "antd";

export default function Footer() {
  return (
    <div>
      <div style={{ backgroundImage: 'url("https://delashstudio.us/wp-content/uploads/2023/08/palm-leaf-shadow-sand-top-view-copy-space.jpg")', backgroundPosition: 'center', backgroundSize: 'cover', padding: 50 }}>
        <Row style={{ maxWidth: 1140, margin: 'auto' }}>
          <Col span={8}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src="https://i.ibb.co/gzd8MGv/test.jpg" style={{ margin: 10, width: 190 }}></img>
            </div>
          </Col>
          <Col span={8}>
            <div>
              <h1>Contact</h1>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <span>832-422-7017</span>
                <span>admin@gmail.com</span>
                <span>11690 Spring Cypress Rd, Ste 300, Cypress, Texas</span>
              </div>
              <h1>Business Hours</h1>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span>Mon-Sat: 09:00AM</span>
                <span>Sunday: 10:00AM</span>
              </div>
            </div>
          </Col>
          <Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.8205464442!2d-95.6012241!3d30.0133088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d2e1a7e06251%3A0x17dc6d84e598794a!2s11690%20Spring%20Cypress%20Rd%20Suite%20300%2C%20Tomball%2C%20TX%2077377!5e0!3m2!1sen!2sus!4v1699003012508!5m2!1sen!2sus" width="350" height="250" style={{border: `${'#111'} 2px solid`}} loading="lazy"></iframe>
          </Col>
        </Row>
      </div>
      <div style={{ textAlign: 'center', backgroundColor: '#000', color: 'white', padding: 25 }}>Copyright © 2023</div>
    </div>
  )
}