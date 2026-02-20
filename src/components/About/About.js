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
                    foundation of making art and being an artist.<br /> The outcome
                    would soon be evident. No winner, no loser but a clear insight.
                    I decided to make a U-turn and retrain myself and learn web development.
                    <br /><br />

                    I started out with HTML5, CSS3 and javascript ES5/ES6. I chose for Javascript because it is one of the most popular
                    and most commonly used languages out there. I followed a comprehensive course to learn JavaScript on Udemy among
                    with some other courses like 'Javascript, Understanding the Weird Parts' and 'Javascript Essentials'. Books like
                    'Eloquent Javascript' and 'Javascript the Definitive Guide' are very good as a reference but in the end google is
                    what I use most learning new skills or finding solutions when ever you run into problems or you are stuck building your own projects.
                    Subsequently I wanted to broaden my knowledge and skills and add a framework or library to my tiny stack.
                    For the same reason I chose Javascript I chose React(hooks), just because it is the most popular Javascript library
                    and I fell in love with it immediately. Along the way I learned how to use Nextjs, REST-api's, git/github, Tailwind, css modules, Sass, MongoDB and some basic
                    knowledge on lots of stuff like Redux, Redux Toolkit, Express, Postman, Shadcn and MaterialUI. 
                    Photoshop for editing images comes in handy as well, since it is hard to imagine a website without any images.<br /><br />

                    Anyway, right from the start I was mesmerized by how coding works, the sheer possibilities and it's effect on society.
                    I must admit that, lacking technological knowledge on how an application exactly works behind the scenes made me believe
                    there was a lot of magic going on. Now after 2,5 years I know there are no magicians at work but only very creative and clever people.
                    The symbiosis between art/design and technology completed a package that made me feel excited and motivated to learn more and more.
                    
                    <br /><br />
                    Noud van Dun<br />
                    <span>Amsterdam, April 6, 2022</span>
                </div>

            </div>


        </div>
    )
}

export default About
