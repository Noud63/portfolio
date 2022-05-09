import React from 'react'
import style from './Projects.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import DuoMenu from '../DuoMenu.js'
import ListItems from './ListItems.js'
import LastTwoItems from './LastTwoItems.js'
import totop from '../../images/totop.png'
import wink from '../../images/wink.png'
import github from '../../images/github.png'

const Projects = () => {

    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 2000) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });

        return function cleanup() {
            setShowButton(false);
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className={style.projects}>
                <div className={style.wrapper}>
                    <div className={style.title}>Projects</div>
                    <div className={style.menuBox}>
                        <div className={style.headerWrapper}>
                            <Namemenu />
                            <Menu />
                            <DuoMenu />
                        </div>
                    </div>
                    <div className={style.projectsList}>
                        <ListItems />
                    </div>

                    <div className={style.lastTwo}>You gotta start somewhere &nbsp;<img src={wink} alt="wink" style={{ width: '20px' }} /></div>

                    <div className={style.projectsList2}>
                        <LastTwoItems />
                    </div>

                    <a href="https://github.com/Noud63?tab=repositories" target="_blank" className={style.githubRepos} style={{ textDecoration: "none" }}>
                        <button className={style.btn}>All Github Repo's<img src={github} alt="github" className={style.githubPng} /></button>
                    </a>

                </div>
            </div>
            {showButton && (
                <div onClick={scrollToTop} className={style.backToTop}>
                    <img src={totop} alt="totop" className={style.arrowTop} />
                </div>
            )}
        </>
    )
}

export default Projects
