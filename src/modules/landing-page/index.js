import React from 'react'
import Navbar from './components/Navbar'
import FirstFold from './components/first-fold'
import SecondFold from './components/second-fold'

import styles from './index.module.scss'

function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <FirstFold />
      <SecondFold />
    </div>
  )
}

export default LandingPage