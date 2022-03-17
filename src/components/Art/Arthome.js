import React from 'react';
import style from './Arthome.module.css';
import { Link } from "react-router-dom";
import easel from '../../images/easel.png'

const Arthome = () => {

    return (
        <div className={style.artContainer}>
            <div className={style.title}>Art</div>
            <div className={style.wrapper}>
                <img src={easel} alt="palette" className={style.palette}/>
                <div className={style.art}>
                    I've been a professional independant artist for many years.<br />
                If you are interested in art or just curious, have a look.......
           <Link to={'/art'}>
                        <button className={style.btn}>Preview and more...</button>
                    </Link>
            </div>
            </div>
        </div>
    )
}

export default Arthome
