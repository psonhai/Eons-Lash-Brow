import Link from "next/link"
import { default as Button } from "./button"
import styles from './header.module.css'


export default function Header() {
  return (
    <nav style={{ boxShadow: '2px 2px 10px 0px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxWidth: 1140, margin: 'auto', display: 'flex', alignItems: 'center' }}>
        <img className={styles.logo} src="https://i.ibb.co/gzd8MGv/test.jpg" style={{ margin: 10 }}></img>
        <div className={styles.navbar} style={{ margin: 'auto', gap: 30 }}>
          <Link className={styles.active} href="#"><span>Home</span></Link>
          <Link href="#"><span>About</span></Link>
          <Link href="#"><span>Services</span></Link>
          <Link href="#"><span>Gallery</span></Link>
          <Link href="#"><span>Contacts</span></Link>
          <Link href="#"><span>Reviews</span></Link>
        </div>
        <a href='tel:+1-832-422-7017'><Button style={{ margin: 10, marginLeft: 'auto', marginRight: 10 }}>Book Now</Button></a>
      </div>
    </nav>
  )
}