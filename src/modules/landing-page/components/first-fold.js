import React from 'react'
import RIGHT_IMAGE from 'assets/images/first-fold-right.svg'
import styles from './first-fold.module.scss'

function FirstFold() {
  return (
    <div className={styles.wrapper}>
        <img className={styles.rightImage} src={RIGHT_IMAGE} alt='right' />
        <div className={styles.content}>
            <p className={styles.heading}>Instant New Designs.<br /> No Photoshop. Copyright Free</p>
            <p className={styles.description}>“Our powerful AI models generate novel designs by just using text and images”</p>
            <p className={styles.bgLine}>New York skyline in Cubist Style</p>
            <p className={styles.tryNow}>Try Now</p>
        </div>
    </div>
  )
}

export default FirstFold