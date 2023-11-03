import { default as Button } from "./button"

export default function Header() {
  return (
    <nav style={{ boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxWidth: 1140, margin: 'auto', display: 'flex', alignItems: 'center' }}>
        <img src="https://i.ibb.co/gzd8MGv/test.jpg" style={{ margin: 10, width: '230px' }}></img>
        <div style={{ display: 'flex', margin: 'auto', gap: 30 }}>
          <a href="#"><span>Home</span></a>
          <a href="#"><span>About</span></a>
          <a href="#"><span>Services</span></a>
          <a href="#"><span>Gallery</span></a>
          <a href="#"><span>Contacts</span></a>
          <a href="#"><span>Reviews</span></a>
        </div>
        <Button style={{ margin: 10 }}>Book Now</Button>
      </div>
    </nav>
  )
}