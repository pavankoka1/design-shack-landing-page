import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import Typical from 'react-typical'
import IMAGE_1 from 'assets/images/first-fold-1.svg'
import IMAGE_2 from 'assets/images/first-fold-2.svg'
import IMAGE_3 from 'assets/images/first-fold-3.svg'
import IMAGE_4 from 'assets/images/first-fold-4.svg'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import styles from './first-fold.module.scss'

const boxShadowValue = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';

function FirstFold() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    var i = 0;
    setInterval(() => {
      i = i + 1;
      setActiveImage(act => {
        return (i % 4)
      })
    }, 5000);
  }, [])

  function renderAnimatedText() {
    switch(activeImage) {
      case 0:
        return <Typical
                  steps={[
                    'New York skyline in Cubist Style', 5000
                  ]}
                />
      case 1:
        return <Typical
                  steps={[
                    'Volcano in oil painting', 5000,
                  ]}
                />
      case 2:
        return <Typical
                  steps={[
                    'Mushroom in watercolor painting', 5000,
                  ]}
                />
      case 3:
        return <Typical
                  steps={[
                    'Tree in pencil sketching', 5000,
                  ]}
                />
    }
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <p className={styles.heading}>Instant New Designs.<br /> No Photoshop. Copyright Free</p>
            <p className={styles.description}>“Our powerful AI models generate novel designs by just using text and images”</p>
            <p className={styles.bgLine}>
              {renderAnimatedText()}
            </p>
            <Button size='large' color='error' variant='outlined' children='Create Now' />
        </div>
        <div style={{display: 'flex'}}>
          <div style={{marginRight: '16px', width: '218px'}}>
            <motion.img 
              src={IMAGE_1} 
              alt='first-fold' 
              width={218} 
              style={{
                marginBottom: '16px',
                boxShadow: activeImage === 0 ? boxShadowValue : '',
                zIndex: activeImage === 0 ? 10 : 1,
              }}
              animate={{
                scale: activeImage === 0 ? 1.2 : 1,
              }}
              transition={{ duration: 2 }}
            />
            <motion.img 
              src={IMAGE_3} 
              alt='first-fold' 
              width={218}
              style={{
                boxShadow: activeImage === 1 ? boxShadowValue : '',
                zIndex: activeImage === 1 ? 10 : 1,
              }}
              animate={{
                scale: activeImage === 1 ? 1.2 : 1,
              }}
              transition={{ duration: 2 }}
            />
          </div>
          <div>
            <motion.img 
              src={IMAGE_2} 
              alt='first-fold' 
              width={189} 
              style={{
                marginBottom: '16px', 
                marginTop: '72px', 
                boxShadow: activeImage === 2 ? boxShadowValue : '',
                zIndex: activeImage === 2 ? 10 : 1,
              }}
              animate={{
                scale: activeImage === 2 ? 1.2 : 1,
              }}
              transition={{ duration: 2 }} 
            />
            <motion.img 
              src={IMAGE_4} 
              alt='first-fold' 
              width={218} 
              style={{
                boxShadow: activeImage === 3 ? boxShadowValue : '',
                zIndex: activeImage === 3 ? 10 : 1,
              }}
              animate={{
                scale: activeImage === 3 ? 1.2 : 1,
              }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
    </div>
  )
}

export default FirstFold