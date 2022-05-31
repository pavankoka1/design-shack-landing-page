import React from 'react'
import LEFT_IMAGE from 'assets/images/third-fold-left.png'
import styles from './third-fold.module.scss'

function ThirdFold() {
  return (
    <div className={styles.wrapper}>
        <img className={styles.leftImage} src={LEFT_IMAGE} alt='right' />
        <div className={styles.content}>
            <p className={styles.head}>
                Design by just text inputs
            </p>
            <p className={styles.desc}>
                Simply ‘Type in’ your desired images or designs and let AI (Magically) create instantly
                <br />
                <br />
                Every creation is unique and everytime you click ‘Generate button’ a new set of images are generated for the given text inputs
                <br />
                <br />
                But sometimes you just have visual images and no text…
            </p>
        </div>
    </div>
  )
}

export default ThirdFold