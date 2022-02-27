import React from 'react';
import style from './Arthome.module.css';
import filmstrip from '../../images/filmstrip.png';
import downarrow from '../../images/downarrow.png'

const Arthome = () => {

    return (
        <div className={style.artContainer}>

            <div className={style.title}>Art</div>

            <div className={style.wrapper}>

                <div className={style.previewBox}>
                    <div className={style.preview}><img src={filmstrip} alt="noud van dun" className={style.pic} /></div>
                </div>

                <a href="http://www.noudvandun.com" target="blank" style={{ textDecoration: 'none' }}>
                    <div className={style.name}>WWW.NOUDVANDUN.COM</div>
                </a>

            </div>

        </div>
    )
}

export default Arthome
