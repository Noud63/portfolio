import React, { useState } from "react";
import { projectsList } from "../../ProjectsList.js";
import style from "./Projects.module.css";
import link from "../../images/link.png";
import linkorange from "../../images/linkorange.png";
import { Link } from "react-router-dom";

const ListItems = () => {
  const [activeColor, setActiveColor] = useState(-1);

  return (
    <>
      {projectsList?.map((project, index) => {
        const { id, title, screenshot, icons, languages } = project;
        return (
          <Link
            to={`/singleproject/${id}`}
            state={{ project: project }}
            key={id}
            style={{ textDecoration: "none" }}
          >
            <div
              className={style.project}
              onMouseEnter={() => setActiveColor(index)}
              onMouseLeave={() => setActiveColor(-1)}
            >
              <div className={style.projectTitle}>{title}</div>

              <div className={style.imageBox}>
                <img
                  src={process.env.PUBLIC_URL + screenshot}
                  alt={title}
                  className={style.image}
                />
              </div>
              <div className={style.iconsBox}>
                <img
                  src={process.env.PUBLIC_URL + icons}
                  alt="icons"
                  className={style.icons}
                />
              </div>

              <div className={style.languagesBox}>
                <div className={style.languages}>
                  {languages.map((language, i) => {
                    return <li key={i}>{language}</li>;
                  })}
                </div>
              </div>
              <div className={style.footer}>
                <img
                  src={index === activeColor ? linkorange : link}
                  alt="icon"
                  className={style.linkIcon}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default ListItems;
