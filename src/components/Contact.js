import React from 'react'
import classes from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faInstagram,faFacebook ,faTwitter,faYoutube,faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons"
const Contact = () => {
    return (
        <div className={classes.containertop}>
            <h1 className={classes.h1} > Contact  </h1>
            <div className={classes.container}>
                <div className={classes.contact}>
                    <div className={classes.left}>
                        <div className={classes.heading}>Contact Me</div>
                        <div className={classes.para}>Feel free to contact us</div>
                        <div className={classes.form}>
                            <div className={classes.field}>
                                <input type="text" name="name" id="name" required /> 
                                <label for="name" className ={classes.label}>Your Name</label>
                            </div>
                            <div className={classes.field}>
                                <input type="email" name="email" id="email" required />
                                <label for="email" className ={classes.label}>Your Email</label>
                            </div>
                            <div className={classes.field}>
                                <input type="text" name="phone" id="phone" required />
                                <label for="phone" className ={classes.label}>Your Mobile Number</label>
                            </div>
                            <div className={classes.field}>
                                <textarea name="msg" id="msg" cols="30" rows="5" required></textarea>
                                <label for="msg" className={classes.label ,classes.t_msg}>Your Message</label>
                            </div>
                            <button className={classes.btn}>Submit <div></div> </button>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <div className={classes.right_heading}>Contact Information</div>
                        <div className={classes.tabs}>
                            <div className={classes.tab1 ,classes.tab}>
                                <div className={classes.email}>premenaga@gmail.com</div>
                            </div>
                            <div className={classes.tab2, classes.tab}>
                                <div className={classes.phone}>8825962425</div>
                            </div>
                            <div className={classes.tab3, classes.tab}>
                                <div className={classes.location}><i className="fas fa-home"></i>tamil nadu, India</div>
                            </div>
                        </div>
                        <div className={classes.social}>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact;