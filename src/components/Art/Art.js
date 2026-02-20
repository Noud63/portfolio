import React, { useState, useCallback} from 'react'
import style from './Art.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import Newmenu from '../Newmenu.js'
import dia1 from '../../images/dia1.png'
import dia2 from '../../images/dia2.jpg'
import dia3 from '../../images/dia3.jpg'
import dia4 from '../../images/dia4.jpg'
import arrow from '../../images/downarrow.png'
import hotel from '../../images/hotelgroot.jpg'
import disco from '../../images/discogroot.jpg'
import enigma from '../../images/enigmagroot.jpg'
import ufo from '../../images/ufogroot.jpg'
import ImageViewer from "react-simple-image-viewer";

const Art = () => {

const worksOfArt = [
       hotel,
       disco,
       enigma,
       ufo
    ]

    const slides = [
        dia1,
        dia2,
        dia3,
        dia4
    ]

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);


    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };


    return (
        <div className={style.artContainer}>
            <div className={style.title}>Art</div>
            <div className={style.headerWrapper}>
                <Namemenu />
                <Menu />
                <Newmenu />
            </div>

            <div className={style.slides}>
                    {slides.map((slide, index) => {
                        return <div className={style.screenBox} key={index}>
                             <img
                                src={slide}
                                onClick={() => openImageViewer(index)}
                                width="250"
                                className={style.slide2}
                                key={index}
                                style={{ margin: "2px" }}
                                alt=""
                            />

                            {isViewerOpen && (
                                <ImageViewer
                                    src={worksOfArt}
                                    currentIndex={currentImage}
                                    onClose={closeImageViewer}
                                    disableScroll={false}
                                    backgroundStyle={{
                                    backgroundColor: "rgb(2, 17, 27, .3)"
                                    }}
                                    closeOnClickOutside={true}
                                />
                            )}
                        </div>
                    })}
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
