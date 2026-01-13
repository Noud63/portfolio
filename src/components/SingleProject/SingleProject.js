import React, { useState, useEffect, useRef, useCallback } from 'react'
import style from './SingleProject.module.css'
import { useNavigate } from "react-router-dom"; // useHistory = useNavigate
import { useParams } from "react-router-dom";
import { projectsList } from '../../ProjectsList.js'
import ImageViewer from "react-simple-image-viewer";

const SingleProject = () => {

    const { id } = useParams();
    const [project, setProject] = useState({});
    const [screens, setScreens] = useState([]);
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

    let navigate = useNavigate();

    const getItem = useCallback(() => {
        let item = projectsList[id]
        setProject(item)
        let screens = item.screens
        screens = screens.map(el => el.screenBig)
        setScreens(screens)
    }, [id]);

    useEffect(() => {
        getItem()
    }, [getItem]);

    const goBackHandler = () => {
        navigate('/projects')
    };

    const btnRef = useRef();
    const textRef = useRef();

    const changeText = useCallback(() => {
        textRef.current.innerHTML = project.description
        if (project.github2 === "") {
            btnRef.current.textContent = 'no deployment';
            btnRef.current.disabled = true;
        } else {
            btnRef.current.textContent = 'Live Demo';
            btnRef.current.disabled = false;
        }
    }, [project.description, project.github2]);

    useEffect(() => {
        changeText()
    }, [changeText]);



    return (
        <div className={style.background}>

            <div className={style.header}>
                <div className={style.title}>{project.title}</div>
                <div className={style.iconsBox}><img src={process.env.PUBLIC_URL + project.icons} alt="" className={style.icons} /></div>
            </div>

            <div className={style.imageBox}>
                <div className={style.slides}>
                    <img src={process.env.PUBLIC_URL + project.mockups} alt="responsive mockup" className={style.image} />
                </div>
            </div>

            <div className={style.text}>
                <div className={style.infoBox}>
                    <div className={style.info}>About this project:</div><br />
                    <div className={style.description} ref={textRef}></div>
                </div>
            </div>

            <div className={style.uxui}>
                {screens.map((slide, index) => {
                    return <div className={style.screenBox} key={index}>
                        <img
                            src={slide}
                            onClick={() => openImageViewer(index)}
                            width="250"
                            className={style.screen}
                            key={index}
                            style={{ margin: "2px" }}
                            alt=""
                        />

                        {isViewerOpen && (
                            <ImageViewer
                                src={screens}
                                currentIndex={currentImage}
                                onClose={closeImageViewer}
                                disableScroll={false}
                                backgroundStyle={{backgroundColor: "rgb(2, 17, 27, .3)"}}
                                closeOnClickOutside={true}
                            />
                        )}
                    </div>
                })}
            </div>

            <div className={style.buttons}>
                <div className={style.btnBox} >
                    <button type="button" className={style.btn} onClick={goBackHandler}>Go Back</button>
                </div>

                <div className={style.btnBox2} >
                    <a href={project.github} target="blank">
                        <button type="button" className={style.btn1} >View code</button>
                    </a>
                </div>
                <div className={style.btnBox} >
                    <a href={project.github2} target="blank">
                        <button type="button" className={style.btn2} ref={btnRef}>Live Demo</button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default SingleProject
