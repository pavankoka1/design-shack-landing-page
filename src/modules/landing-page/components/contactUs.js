import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import PHONE from 'assets/icons/phone.svg';
import MAIL from 'assets/icons/mail.svg';
import LOCATION from 'assets/icons/location.svg';

import styles from './contactUs.module.scss';

function ContactUs() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>Contact Us</p>
            <div className={styles.content}>
                <div className={styles.left}>
                    <p className={styles.desc}>
                        Identify interpretations of new trending imagery as well
                        as textual information
                    </p>
                    <div className={styles.info}>
                        <img src={PHONE} alt="phone" />
                        <p>+91 9818279080</p>
                    </div>
                    <div className={styles.info}>
                        <img src={MAIL} alt="mail" />
                        <p>info@theprintscompany.com</p>
                    </div>
                    <div className={styles.info}>
                        <img src={LOCATION} alt="location" />
                        <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <TextField
                        required
                        label="Your email address"
                        variant="filled"
                        fullWidth={true}
                        placeholder="stevejobs@apple.com"
                        sx={{
                            marginBottom: '32px',
                        }}
                    />
                    <TextField
                        required
                        multiline
                        rows={4}
                        label="Please enter your message here"
                        variant="filled"
                        fullWidth={true}
                        placeholder="text goes here ..."
                        sx={{
                            marginBottom: '32px',
                        }}
                    />
                    <span
                        style={{
                            display: 'flex',
                            flexDirection: 'row-reverse',
                        }}>
                        <Button variant="contained" size="large">
                            Submit
                        </Button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
