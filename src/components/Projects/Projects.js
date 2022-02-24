import React from 'react'
import style from './Projects.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import DuoMenu from '../DuoMenu.js'
import ListItems from './ListItems.js'
import totop from '../../images/totop.png'

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
