import React from 'react'
import style from './Contacthome.module.css'
import location from '../../images/location.png'
import email from '../../images/email.png'
import europe from '../../images/europebg.png'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className={style.contactHome}>

            <div className={style.title}>Contact</div>

                <div className={style.contactWrapper}>
                    <div className={style.mapBox}>
                       <img src={europe} alt="europe" className={style.map}/>
                        <div className={style.personal}>
                           <div>
                             <div className={style.location}>
                                <div className={style.iconBox}><img src={location} alt="location" className={style.icon} /></div>
                                <div className={style.city}>Amsterdam, The Netherlands</div>
                             </div>

                             <div className={style.myemail}>
                                <div className={style.iconBox}><img src={email} alt="" className={style.icon} /></div>
                                <div className={style.mail}>noudvandun@gmail.com</div>
                             </div>
                        </div>
                    </div>
                </div>

                <div className={style.personal2}>
                    <div>
                        <div className={style.location}>
                            <div className={style.iconBox}><img src={location} alt="location" className={style.icon} /></div>
                            <div className={style.city}>Amsterdam, The Netherlands</div>
                        </div>

                        <div className={style.myemail}>
                            <div className={style.iconBox}><img src={email} alt="" className={style.icon} /></div>
                            <div className={style.mail}>noudvandun@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className={style.linkBtn}>
                    <Link to="/contact" className={style.link}>
                            <button type="button" className={style.btn}>Contact me</button>
                </Link>
                  </div>
                
                
            </div>
        </div>
    )
}

export default Contact
