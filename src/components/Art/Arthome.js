import React from 'react';
import style from './Arthome.module.css';
import { Link } from "react-router-dom";
import dripping from '../../images/dripping.png'
import dripping2 from '../../images/dripping2.png'
import dripping3 from '../../images/dripping3.png'
import enigma from '../../images/enigmagroot_blauw.jpg'

const Arthome = () => {

    return (
        <div className={style.artContainer}>

            <div className={style.title}>Art</div>

            <div className={style.wrapper}>
    
                    <div className={style.enigmaBox}>
                        <img src={enigma} alt="" className={style.enigma}/>
                    </div>
                        <div className={style.btnBox}>
                            <Link to={'/art'}>
                                <button className={style.btn}>Preview</button>
                            </Link>
                            
                        </div>
                <div className={style.dripping}><img src={dripping} alt="" /></div>
                <div className={style.dripping2}><img src={dripping2} alt="" /></div>
                <div className={style.dripping3}><img src={dripping3} alt="" /></div>
                
            </div>
        </div>
    )
}

export default Arthome
