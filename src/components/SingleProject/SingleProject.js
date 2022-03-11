import React from 'react'
import style from './SingleProject.module.css'
import { useNavigate } from "react-router-dom"; // useHistory = useNavigate
import { SRLWrapper } from "simple-react-lightbox";
import { useParams } from "react-router-dom";
import { projectsList } from '../../ProjectsList.js'

const SingleProject = () => {

    const { id } = useParams();
    const [project, setProject] = React.useState({});
    const [screen, setScreen] = React.useState([]);
    let navigate = useNavigate();

    const getItem = React.useCallback(() => {
        let item = projectsList[id]
        setProject(item)
        let screens = item.screens
        setScreen(screens)
    }, [id]);

    React.useEffect(() => {
        getItem()
    }, [getItem]);


    const goBackHandler = () => {
        navigate('/projects')
    };


    const btnRef = React.useRef();
    const textRef = React.useRef();

    const changeText = React.useCallback(() => {
        textRef.current.innerHTML = project.description
        if (project.github2 === "")
            btnRef.current.textContent = 'no deployment'
    }, [project.description, project.github2]);

    React.useEffect(() => {
        changeText()
    }, [changeText]);


    //lightbox options and styling

    const options = {
        buttons: {
            iconColor: "#ffffff",
            iconPadding: "10px",
            backgroundColor: "transparent",
            showNextButton: false,
            showPrevButton: false,
        },
        caption: {
            captionColor: "#61O6O4",
            captionFontSize: "20px",
        },
        settings: {
            overlayColor: "rgb(0, 0, 0, .7)",
            disablePanzoom: true,
        },
        thumbnails: {
            showThumbnails: false,
        },
    };

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
                {screen.map((screen, i) => {
                    const { screenSmall, screenBig } = screen
                    return <div className={style.screenBox} key={i}>
                        <SRLWrapper options={options}>
                            <a href={process.env.PUBLIC_URL + screenBig}>
                                <img src={process.env.PUBLIC_URL + screenSmall} alt="Print Screen " className={style.screen} />
                            </a>
                        </SRLWrapper>
                    </div>
                })}
            </div>

            <div className={style.buttons}>
                <button type="button" className={style.btn} onClick={goBackHandler}>All Projects</button>
                <button type="button" className={style.btn1} >
                    <a href={project.github} target="blank">View code</a>
                </button>
                <button type="button" className={style.btn2} ref={btnRef}>
                    <a href={project.github2} target='blank'>View Deployment</a>
                </button>
            </div>

        </div>
    )
}

export default SingleProject
