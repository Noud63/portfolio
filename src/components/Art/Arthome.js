import React from 'react';
import style from './Arthome.module.css';
import { Link } from "react-router-dom";
import frame from '../../images/frame2.png'
import frame3 from '../../images/frame3.png'
import frame5 from '../../images/frame5.png'

const Arthome = () => {

    return (
        <div className={style.artContainer}>

            <div className={style.title}>Art</div>

            <div className={style.wrapper}>

                <img src={frame5} alt="frame" className={style.frame} />
                <img src={frame3} alt="frame" className={style.frame3} />
                <div className={style.artAndBtn}>
                    <div className={style.art}>
                            I've been a professional independant artist.<br/>
                            If you are interested in art or just curious,<br/>
                            have a look....
                    </div>
                    <div className={style.btnBox}>
                        <Link to={'/art'}>
                            <button className={style.btn}>Preview and more...</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Arthome
