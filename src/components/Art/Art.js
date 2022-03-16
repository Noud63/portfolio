import React from 'react'
import style from './Art.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import Newmenu from '../Newmenu.js'
import dia1 from '../../images/dia1.jpg'
import dia1color from '../../images/dia1color.jpg'
import dia2 from '../../images/dia2.jpg'
import dia2color from '../../images/dia2color.jpg'
import dia3 from '../../images/dia3.jpg'
import dia3color from '../../images/dia3color.jpg'
import dia4 from '../../images/dia4.jpg'
import dia4color from '../../images/dia4color.jpg'
import arrow2 from '../../images/arrow2.png'

const Art = () => {
    return (
        <div className={style.artContainer}>
            <div className={style.title}>Art</div>
            <div className={style.headerWrapper}>
                <Namemenu />
                <Menu />
                <Newmenu />
            </div>
            <div className={style.slides}>
                <div className={style.slide1}>
                    <img src={dia1} alt="noud van dun" className={style.slide}/>
                    <img src={dia1color} alt="noud van dun" className={style.slideColor}/>
                </div>
                <div className={style.slide2}>
                    <img src={dia2} alt="noud van dun" className={style.slide}/>
                    <img src={dia2color} alt="noud van dun" className={style.slideColor} />
                </div>
                <div className={style.slide3}>
                    <img src={dia3} alt="noud van dun" className={style.slide}/>
                    <img src={dia3color} alt="noud van dun" className={style.slideColor} />
                </div>
                <div className={style.slide4}>
                    <img src={dia4} alt="noud van dun" className={style.slide} />
                    <img src={dia4color} alt="noud van dun" className={style.slideColor} />
                </div>
            </div>

            {/* <div className={style.mywebsite}>
                <div className={style.shebang1}>The whole shebang at:</div>
                <img src={arrow2} alt="arrow" className={style.arrow}/>
                <div className={style.shebang2}>www.noudvandun.com</div>
            </div> */}
        </div>
    )
}

export default Art
