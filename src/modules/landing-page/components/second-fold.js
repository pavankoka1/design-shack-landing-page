import React from 'react'
import TESTIMONIAL_1 from 'assets/icons/testimonial-1.svg'
import TESTIMONIAL_2 from 'assets/icons/testimonial-2.svg'
import TESTIMONIAL_3 from 'assets/icons/testimonial-3.svg'
import styles from './second-fold.module.scss'

function Testimonial({icon, name, desc}) {
    return (
        <div className={styles.testimonial}>
            <div className={styles.head}>
                <img src={icon} alt='icon'/>
                <p className={styles.name}>{name}</p>
            </div>
            <p className={styles.desc}>{desc}</p>
        </div>
    )
}

function SecondFold() {
  return (
    <div className={styles.wrapper}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Testimonial 
                icon={TESTIMONIAL_1} 
                name='Wade Warren (Designer)' 
                desc='DS helps me in rapifly prototype my ideas and generate mood boards in few hours compared to days previously'
            />
            <div style={{marginTop: '72px'}}>
                <Testimonial 
                    icon={TESTIMONIAL_2} 
                    name='Wade Warren (Designer)' 
                    desc='DS helps me in rapifly prototype my ideas and generate mood boards in few hours compared to days previously'
                />
            </div>
        </div>
        <div style={{margin: '24px 0 0 90px'}}>
            <Testimonial 
                icon={TESTIMONIAL_3} 
                name='Wade Warren (Designer)' 
                desc='DS helps me in rapifly prototype my ideas and generate mood boards in few hours compared to days previously'
            />
        </div>
    </div>
  )
}

export default SecondFold