import React from 'react'
import style from './Art.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import Newmenu from '../Newmenu.js'
import dia1 from '../../images/dia1.jpg'
import dia2 from '../../images/dia2.jpg'
import dia3 from '../../images/dia3.jpg'
import dia4 from '../../images/dia4.jpg'
import arrow from '../../images/downarrow.png'
import hotel from '../../images/hotelgroot.jpg'
import disco from '../../images/discogroot.jpg'
import enigma from '../../images/enigmagroot.jpg'
import ufo from '../../images/ufogroot.jpg'

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
                       <a href={hotel} alt="hotel">
                         <img src={dia1} alt="noudvandun" className={style.slide} />
                       </a>
                       <div className={style.titlePainting}>H.O.T.E.L.</div>
                    </div>
                
                
                
                    <div className={style.slide2}>
                        <a href={disco} alt="hotel">
                            <img src={dia2} alt="noudvandun" className={style.slide} />
                        </a>
                        <div className={style.titlePainting}>D.I.S.C.O.</div>
                    </div>
                
               
                
                    <div className={style.slide2}>
                        <a href={enigma} alt="hotel">
                            <img src={dia3} alt="noudvandun" className={style.slide} />
                        </a>
                        <div className={style.titlePainting}>E.N.I.G.M.A.</div>
                    </div>
                

                
                    <div className={style.slide2}>
                        <a href={ufo} alt="hotel">
                            <img src={dia4} alt="Noud van Dun , U.F.O. , 2016" className={style.slide} />
                        </a>
                        <div className={style.titlePainting}>U.F.O.</div>
                    </div>
                
                
                
            </div>

            <div className={style.mywebsite}>
                <div className={style.shebang1}>The whole shebang at:</div>
                <img src={arrow} alt="arrow" className={style.arrow}/>
                <a href="http://www.noudvandun.com" target="blank">
                    <button className={style.btn}>www.noudvandun.com</button>
                </a>
              
            </div>
        </div>
    )
}

export default Art
