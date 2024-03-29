import React from 'react'
import style from './Projectshome.module.css'
import htmlicon from '../../images/htmlicon.png'
import cssicon from '../../images/cssicon.png'
import jsicon from '../../images/jsicon.png'
import reacticon from '../../images/reacticon.png'
import mongodbicon from '../../images/mongodb.png'
import githubicon from '../../images/github.png'
import restapiicon from '../../images/restapi.png'
import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <>
            <div className={style.projects}>
                <div className={style.title}>Projects</div>
                <div className={style.wrapper}>

                    <div className={style.text}>
                        The projects, a brief introduction.<br />
                        All projects are built with HTML5, CSS3/Sass/MaterialUI, Javascript ES6+/ES6 Modules. React(hooks), React-Redux-Toolkit or Vite.js.
                        Some applications are frontend only, others al fullstack applications like applications built with the MERN stack.<br/>
                        Express, Node and MongoDB are used for the backend for common practices like fetching data, filtering data, register user information, login validation, authentication and authorization etc.<br/>
                        There are several REST-api use cases aswell.
                        In one particular case there is a web-app converted to a desktop-app with Electron.<br/>
                        Click the 'view all projects' button to see all the projects I've done so far with all the information needed.
                        To view the code there is a link to that specific github repo. If the app is deployed click the 'live demo' button.
                    </div>

                    <div className={style.stackIcons}>
                        <div className={style.icons}>
                            <img src={htmlicon} alt="htmlicon" className={style.htmlicon} />
                            <div className={style.codeName}>HTML 5</div>
                        </div>

                        <div className={style.icons}>
                            <img src={cssicon} alt="htmlicon" className={style.cssicon} />
                            <div className={style.codeName}>CSS 3</div>
                        </div>

                        <div className={style.icons}>
                            <img src={jsicon} alt="htmlicon" className={style.jsicon} />
                            <div className={style.codeName}>JS</div>
                        </div>

                        <div className={style.icons}>
                            <img src={reacticon} alt="htmlicon" className={style.reacticon} />
                            <div className={style.codeName}>REACT</div>
                        </div>

                    </div>

                    <div className={style.stackIcons2}>
                        <div className={style.icons2}>
                            <img src={mongodbicon} alt="htmlicon" className={style.htmlicon} />
                            <div className={style.codeName}>MongoDB</div>
                        </div>

                        <div className={style.icons2}>
                            <img src={restapiicon} alt="htmlicon" className={style.restapiicon} />
                            <div className={style.codeName}>REST-api</div>
                        </div>

                        <div className={style.icons2}>
                            <img src={githubicon} alt="htmlicon" className={style.cssicon} />
                            <div className={style.codeName}>Github</div>
                        </div>
                    </div>

                    <Link to="/projects" className={style.link}>
                        <button type="button" className={style.btn}>View all projects</button>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Projects
