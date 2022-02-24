import React from 'react'
import style from './Newmenu.module.css'
import { Link } from "react-router-dom";

const Newmenu = () => {
    return (
            <div className={style.newMenu}>
                <Link to="/about" className={style.link}><div className={style.linkAbout}>About</div></Link>
                <Link to="/projects" className={style.link}><div className={style.linkProjects}>Projects</div></Link>
                <Link to="" className={style.linkEmpty}><div className={style.linkArt}></div></Link>
                <Link to="/contact" className={style.link}><div className={style.linkCotact}>Contact</div></Link>
                <Link to="/art" className={style.link}><div className={style.linkHome}>Art</div></Link>
                <Link to="/" className={style.link}><div className={style.linkHome}>Home</div></Link>
            </div>
       )
}

export default Newmenu
