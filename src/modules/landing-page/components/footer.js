import React from 'react'
import LOGO from 'assets/logos/design-shack-white.svg'
import FOOTER_ICONS from 'assets/icons/footer.svg'
import styles from './footer.module.scss'

function Footer() {
  return (
    <div className={styles.wrapper}>
        <img src={LOGO} alt='logo' />
        <div className={styles.tags}>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Gallery</p>
            <p>About Us</p>
        </div>
        <img src={FOOTER_ICONS} alt='footer logos' />
    </div>
  )
}

export default Footer