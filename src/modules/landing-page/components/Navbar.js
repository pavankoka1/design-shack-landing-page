import React from 'react'
import SIGN_UP from 'assets/icons/sign-up.svg'
import DESIGN_SHACK from 'assets/logos/design-shack.svg';
import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <div className={styles.wrapper}>
        <img src={DESIGN_SHACK} alt='logo' />
        <div className={styles.links}>
          <p>About</p>
          <p>Create Now</p>
          <p>Gallery</p>
          <div className={styles.signUp}>
            <img src={SIGN_UP} alt='sign up' />
            <p>Sign Up</p>
          </div>
        </div>
    </div>
  )
}

export default Navbar