import React from 'react'
import style from './Abouthome.module.css'
import { Link } from "react-router-dom";
import quotes from '../../images/quotes.png'

const Abouthome = () => {

    return (
        <div className={style.about}>
            <div className={style.title}>About</div>
            <div className={style.textWrapper}>
                
                <div className={style.text}>
                    Artist turned web developer.<br />
                    That's exactly what happened a couple of years ago. A transformation that didn't happen overnight,
                    but a process that gradually evolved over the years.
                    The trigger that set it all in motion was the declining level of satisfaction I was experiencing for
                    some years in making art.<br />
                    <span className={style.fade1}>Different from any artistic crisis I experienced over the years something was undermining the very
                    foundation of making art and being an artist.Wrestling with the bare essence of oneself.</span><br />
                    <span className={style.fade}>The outcome of the fight would soon be evident. No winner, no loser but a clear insight.
                    I decided to make a U-turn and retrain myself to become a so called self-taught web developer.</span><br /><br />
                    <span className={style.fade2}>Coming from a artistic background, teaching yourself to code without any prior knowledge, without a mentor
                    is a time consuming enterprise with a relatively steep learning curve, depending on your background ofcourse.</span><br/>
                    <span className={style.fade3}>But the goal I set myself was clear, become a so called self-taught web developer.</span><br /><br />
                    <div className={style.quotes}><img src={quotes} alt="quotes" className={style.quotespng}/></div>
                    <div className={style.quotes2}><img src={quotes} alt="quotes" className={style.quotespng}/></div>
                   
                    <div className={style.readMore}>
                        <Link to="/about">
                            <button type="button" className={style.btn}>Read more</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abouthome
