import React from 'react'
import LEFT_IMAGE from 'assets/images/fifth-fold-left.svg'
import styles from './fifth-fold.module.scss'

function ThirdFold() {
  return (
    <div className={styles.wrapper}>
        <img className={styles.leftImage} src={LEFT_IMAGE} alt='right' />
        <div className={styles.content}>
            <p className={styles.head}>
                Apply new styles to any image
            </p>
            <p className={styles.desc}>
                Use a image you have and apply contextual styles from our library or a custom style from an image of your own choice
                <br />
                <br />
                The style stransfer will amaze what creations you can do from simple objects and iterate rapidy 
                <br />
                <br />
                But that’s not all, you wish to see what the world is doing … 
            </p>
        </div>
    </div>
  )
}

export default ThirdFold