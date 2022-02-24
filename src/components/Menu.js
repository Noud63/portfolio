import React from 'react'
import { Link } from "react-router-dom";
import style from './Menu.module.css'

const Menu = () => {
    return (
        <div className={style.menu}>
            <div className={style.circles}>

                <Link to="/" className={style.link}>
                    <div className={style.circleTop}>
                        <div className={style.circle1}>Home</div>
                    </div>
                </Link>

                <Link to="/about" className={style.link}>
                <div className={style.circleTop}>
                   <div className={style.circle1}> About</div>
                </div>
                </Link>

                <Link to="/projects" className={style.link}>
                <div className={style.circleTop}>
                   <div className={style.circle1}> Projects</div>
                </div>
               </Link>

                <Link to="/art" className={style.link}>
                <div className={style.circleTop}>
                   <div className={style.circle1}>Art</div>
                </div>
                </Link> 

                <Link to="/contact" className={style.link}>
                <div className={style.circleTop}>
                        Contact
                    <div className={style.circle1}>Contact</div>
                </div>
                 </Link >

            </div>
        </div>
    )
}

export default Menu
