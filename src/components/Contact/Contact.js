import React from 'react'
import style from './Contact.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import Newmenu from '../Newmenu.js';
//import ContactForm from './ContactForm.js';
import ContactUs from '../ContactUs/ContactUs.js';
import location from '../../images/location.png'
import email from '../../images/email.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github2.png'
import Map from '../Map.js'


const Contact = () => {

    return (
        <div className={style.contact}>
            <div className={style.title}>Contact</div>
            <div className={style.headerWrapper}>
                <Namemenu />
                <Menu />
                <Newmenu />
            </div>
            <div className={style.map}>
                <Map />
            </div>
            <div className={style.contactWrapper}>
                <div className={style.personal}>
                    <div className={style.location}>
                        <div className={style.iconBox}><img src={location} alt="location" className={style.icon} /></div>
                        <div className={style.city}>Amsterdam, The Netherlands</div>
                    </div>

                    <div className={style.myemail}>
                        <div className={style.iconBox}><img src={email} alt="" className={style.icon} /></div>
                        <div className={style.mail}>noudvandun@gmail.com</div>
                    </div>

                    <div className={style.linkedin}>
                        <a href="https://www.linkedin.com/in/noud-van-dun-270b665b/">
                            <div className={style.iconBox}><img src={linkedin} alt="" className={style.icon} /></div>
                            <div className={style.mail}>LinkedIn</div>
                        </a>
                    </div>

                    <div className={style.github}>
                        <a href="https://github.com/Noud63?tab=repositories">
                            <div className={style.iconBox}><img src={github} alt="" className={style.icon} /></div>
                            <div className={style.mail}>GitHub (all repositories)</div>
                        </a>
                    </div>
                </div>

                <ContactUs />

            </div>

        </div>
    )
}

export default Contact
