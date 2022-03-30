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
                    I decided to make a U-turn and retrain myself to become a so called self-taught web developer.<br/><br />
                    Coming from a artistic background, teaching yourself to code without any prior knowledge, without a mentor 
                    is a time consuming enterprise with a relatively steep learning curve.
                    But the goal I set myself was clear, become a (front-end) web developer.<br /><br />

                    I started out with HTML5, CSS3 and javascript ES5/ES6. I chose for Javascript because it is one of the most popular
                    and most commonly used languages out there. I followed a comprehensive course to learn JavaScript on Udemy among 
                    with some other courses like 'Javascript, Understanding the Weird Parts' and 'Javascript Essentials'. Books like 
                    'Eloquent Javascript' and 'Javascript the Definitive Guide' are very good as a reference but in the end google is 
                    what I use most learning new skills or finding solutions when ever you are stuck.
                    
                </div>

            </div>
            <span>Amsterdam, Januari 24 2022</span>

        </div>
    )
}

export default About
