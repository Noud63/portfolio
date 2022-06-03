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
                    some years in making art.
                    Different from any artistic crisis I experienced over the years something was undermining the very
                    foundation of making art and being an artist. Wrestling with the bare essence of oneself.<br /> The outcome
                    of the fight would soon be evident. No winner, no loser but a clear insight.
                    I decided to make a U-turn and retrain myself and learn web development.
                    Coming from a artistic background, teaching yourself to code without any prior knowledge, without a mentor
                    is a time consuming enterprise with a relatively steep learning curve.
                    But the goal I set myself was clear, become a (front-end) web developer.<br /><br />

                    I started out with HTML5, CSS3 and javascript ES5/ES6. I chose for Javascript because it is one of the most popular
                    and most commonly used languages out there. I followed a comprehensive course to learn JavaScript on Udemy among
                    with some other courses like 'Javascript, Understanding the Weird Parts' and 'Javascript Essentials'. Books like
                    'Eloquent Javascript' and 'Javascript the Definitive Guide' are very good as a reference but in the end google is
                    what I use most learning new skills or finding solutions when ever you run into problems or you are stuck building your own projects.
                    Subsequently I wanted to broaden my knowledge and skills and add a framework or library to my tiny stack.
                    For the same reason I chose Javascript, I chose React(hooks) just because it is the most popular Javascript library
                    and I fell in love with it immediately. Along the way I learned how to use REST-api's, git/github and some basic
                    knowledge on lots of stuff like Redux, MongoDB, Express, Postman, GSAP etc. Photoshop for editing images comes in handy 
                    as well, since it is hard to imagine a website without any images.<br /><br />

                    Anyway, right from the start I was mesmerized by how coding works, the sheer possibilities and it's effect on society.
                    I must admit that, lacking technological knowledge on how an application exactly works behind the scenes made me believe
                    there was a lot of magic going on. Now after 2,5 years I know there are no magicians at work but only very clever people.
                    My interest and motivation only grew, and with an artistic background the symbiosis between art/design and technology
                    only added to the enthusiasm. But studying for years all by your self has major drawbacks. I am not going to recite the
                    long list of problems you encounter but for me personal it's the slow pace of your development as a future developer that
                    can be frustrating now and then. So it's time to swap environment and find a professional setting to speed thing up and
                    relate to experienced senior developers aswell as junior developers that are still busy climbing the ladder.
                    <br /><br />
                    Noud van Dun<br />
                    <span>Amsterdam, April 6 2022</span>
                </div>

            </div>


        </div>
    )
}

export default About
