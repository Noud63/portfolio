import React from 'react'
import style from './Art.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import Newmenu from '../Newmenu.js'

const Art = () => {
    return (
        <div className={style.artContainer}>
            <div className={style.title}>Art</div>
            <div className={style.headerWrapper}>
                <Namemenu />
                <Menu />
                <Newmenu />
            </div>
        </div>
    )
}

export default Art
