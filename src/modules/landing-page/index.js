import React from 'react'
import Navbar from './components/Navbar'
import FirstFold from './components/first-fold'
import SecondFold from './components/second-fold'
import ThirdFold from './components/third-fold'
import FourthFold from './components/fourth-fold'
import FifthFold from './components/fifth-fold'
import SixthFold from './components/sixth-fold'

import styles from './index.module.scss'

function LandingPage() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <FirstFold />
      <SecondFold />
      <ThirdFold />
      <FourthFold />
      <FifthFold />
      <SixthFold />
    </div>
  )
}

export default LandingPage