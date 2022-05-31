import React from 'react'
import RIGHT_IMAGE from 'assets/images/fourth-fold-right.svg'
import styles from './fourth-fold.module.scss'

function ThirdFold() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <p className={styles.head}>
                Get variation for a
                <br />
                starting image
            </p>
            <p className={styles.desc}>
                You can either use your own image or one that is generated to get new images or more variations which are influenced by the input image
                <br />
                <br />
                You can as well quantify the weightage you wish to give the text and image for generation 
                <br />
                <br />
                But sometimes you just need to change style of an image and preserve the shapes
            </p>
        </div>
        <img className={styles.leftImage} src={RIGHT_IMAGE} alt='right' />
    </div>
  )
}

export default ThirdFold