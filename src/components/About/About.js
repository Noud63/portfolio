import React from 'react'
import style from './About.module.css'
import Menu from '../Menu.js';
import Namemenu from '../Namemenu.js';
import Newmenu from '../Newmenu.js';

const About = () => {

    return (
        <div className={style.about}>
            <div className={style.title}>About</div>
            <div className={style.headerWrapper}>
                <Namemenu />
                <Menu />
                <Newmenu />
            </div>



            <div className={style.text}>

                <div className={style.textBox}>
                    Artist turned web developer.<br />
                    That's exactly what happened a couple of years ago. A transformation that didn't happen overnight,
                    but a process that gradually evolved over the years.
                    The trigger that set it all in motion was the declining level of satisfaction I was experiencing for
                    some years in making art.<br />
                    Different from any artistic crisis I experienced over the years something was undermining the very
                    foundation of making art and being an artist. Wrestling with the bare essence of oneself.<br /> The outcome
                    of the fight would soon be evident. No winner, no loser but a clear insight.
                    I decided to make a U-turn and retrain myself to become a so called self-taught web developer.<br/>
                    Coming from a artistic background, teaching yourself to code without any prior knowledge, without a mentor 
                    is a time consuming enterprise with a relatively steep learning curve, depending on your background ofcourse.
                    But the goal I set myself was clear, become a (front-end) web developer.<br />
                    I believe one is not equiped with only one particular set of skills and certainly not one field of interest.
                    You are not (only) your job title, there is more than that.
                    
                    
                </div>

            </div>
            <span>Amsterdam, Januari 24 2022</span>

        </div>
    )
}

export default About
