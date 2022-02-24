import React from 'react'
import style from './Abouthome.module.css'
import { Link } from "react-router-dom";

const Abouthome = () => {

    return (
        <div className={style.about}>
            <div className={style.title}>About</div>
            <div className={style.textWrapper}>
                <div className={style.text}>
                    Artist turned web developer.<br />
                    It started a couple of years ago. A transformation that didn't happen overnight,
                    but a process that gradually evolved over the years. 
                    The trigger that set it all in motion was the declining level of satisfaction I was experiencing for 
                    some years in making art. 
                    Different from any artistic crisis I experienced over the years, something was undermining the very 
                    foundation of making art and being an artist. Wrestling with the bare essence of oneself.
                    But as the saying goes 'never waste a good crisis' I decided to retrain myself and become a so called 
                    self taught web developer. 
                    
                    I believe one is not equiped with only one particular set of skills and certainly not one field of interest. 
                    You are not (only) your job title, there is more than that.<br /> 
                    So I decided to make a U-turn, not the full 180 degrees though, as it turned out coding involves more creativity as aspected.<br /><br />

                    <span className={style.fade}>
                        Coming from a artistic background, teaching yourself to code without any prior knowledge, without a mentor
                        is a time consuming enterprise with a relatively steep learning curve, depending on your background ofcourse.<br />
                        <span className={style.fade2}>But the goal I set myself was clear, become a so called self-taught web developer &#8608;<br /><br /></span>
                    </span>
                    <div className={style.readMore}>
                        <Link to="/about">
                            <button type="button" className={style.btn}>read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abouthome
