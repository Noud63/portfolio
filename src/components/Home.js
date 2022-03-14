import React, { useEffect, useState, useRef, useCallback } from 'react'
import style from './Home.module.css'
import Projectshome from './Projects/Projectshome.js'
import Titlebar from './Titlebar.js'
import Abouthome from './About/Abouthome.js'
import Contacthome from './Contact/Contacthome.js'
import Arthome from './Art/Arthome.js'
import totop from '../images/totop.png'
import downarrow from '../images/downarrow.png'
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const Home = () => {

    const [showButton, setShowButton] = useState(false);
    const [runAnimation, setRunAnimation] = useState(true);

    const boxRef = useRef();
    const boxRef2 = useRef();
    const boxRef3 = useRef();
    const boxRef4 = useRef();
    const boxRef5 = useRef();
    const boxRef6 = useRef();
    const boxRef7 = useRef();

    const animateMenu = useCallback(() => {

        if (runAnimation && window.sessionStorage.getItem('firstAnimationDone') === null) {
            gsap.fromTo(boxRef.current, { y: '-100vh' }, { duration: 2, y: boxRef.current });
            gsap.fromTo(boxRef2.current, { x: '100vw' }, { duration: 2, x: boxRef2.current });
            gsap.fromTo(boxRef3.current, { x: '100vw' }, { rotation: -360, duration: 3.5, x: boxRef3.current });
            gsap.fromTo(boxRef4.current, { x: '100vw' }, { rotation: -360, duration: 2.5, x: boxRef4.current });
            gsap.fromTo(boxRef5.current, { x: '-100vw' }, { rotation: 360, duration: 2, x: boxRef5.current });
            gsap.fromTo(boxRef6.current, { x: '-100vw' }, { rotation: 360, duration: 4.5, x: boxRef6.current });
            gsap.fromTo(boxRef7.current, { y: '-100vh' }, { duration: 4.5, y: boxRef7.current, delay: 2.5 });
            window.sessionStorage.setItem('firstAnimationDone', 1)
        }

    }, [runAnimation])

    useEffect(() => {
        animateMenu()
        return function cleanup() {
            setRunAnimation(false);
        }
    }, [animateMenu]);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 900) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (

        <>
            <div className={style.wrapper}>

                <div className={style.homepageHeader}>
                    <div className={style.homepageName} ref={boxRef}>N O U D &nbsp;V A N &nbsp;D U N</div>
                    <div className={style.homepageWebdev} ref={boxRef2}>web development art & design</div>
                </div>

                <div className={style.menu}>

                    <div className={style.circles}>

                        <div className={style.menuBox}>
                            <Link to="/about" className={style.link} ref={boxRef6}>
                                <div className={style.circleTop}>

                                    <div className={style.circle1}>About</div>
                                </div>
                            </Link>

                            <Link to="/projects" className={style.link} ref={boxRef5}>
                                <div className={style.circleTop}>

                                    <div className={style.circle1}>Projects</div>
                                </div>
                            </Link>
                        </div>

                        <div className={style.menuBox2}>
                            <Link to="/art" className={style.link} ref={boxRef4}>
                                <div className={style.circleTop}>

                                    <div className={style.circle1}>Art</div>
                                </div>
                            </Link>

                            <Link to="/contact" className={style.link}>
                                <div className={style.circleTop} ref={boxRef3}>

                                    <div className={style.circle1} >Contact</div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className={style.downarrow} ref={boxRef7}><img src={downarrow} alt="downarrow" className={style.arrow} /></div>

            </div>
           
            <Titlebar />
            <Abouthome />
            <Titlebar />
            <Projectshome />
            <Titlebar />
            <Arthome />
            <Titlebar />
            <Contacthome />

            {showButton && (
                <div onClick={scrollToTop} className={style.backToTop}>
                    <img src={totop} alt="totop" className={style.arrowTop} />
                </div>
            )}
        </>    

    )
}

export default Home
