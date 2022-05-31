import React from 'react'
import WIDE_IMAGE from 'assets/images/sixth-fold.png'
import styles from './sixth-fold.module.scss'

function ThirdFold() {
  return (
    <div className={styles.wrapper}>
        <p className={styles.header}>Use Cases</p>
        <p className={styles.text}>Art for frames at home and offices</p>
        <img className={styles.leftImage} width={1184} src={WIDE_IMAGE} alt='wide' />
    </div>
  )
}

export default ThirdFold