import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import style from './ContactForm.module.css'

const ContactUs = () => {

    const form = useRef();
    const [status, setStatus] = useState("Submit");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending....')

        emailjs.sendForm('service_uajwvyh', 'template_7uflv8h', form.current, 'user_hmFUVd309vqUiRXCpAWNG')
            .then((result) => {
                console.log(result.text)
                setStatus('Message successfully sent!')
                let timer = setTimeout(() => {
                    setStatus("submit")
                    clearTimeout(timer)
                }, 5000)
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

    return (

        <div className={style.contactForm}>
            <div className={style.message}>Leave a message:</div>
            <form ref={form} onSubmit={sendEmail} autoComplete="off">
                <div className={style.name}>
                    <input type="text" name="from_name" placeholder="Name" required />
                </div>
                <div className={style.email}>
                    <input type="email" name="from_email" placeholder="Email" required />
                </div>
                <div className={style.text}>
                    <textarea name="message" placeholder="Start typing...." required />
                </div>
                <button type="submit" value="send" className={style.btn}>{status}</button>
            </form>
        </div>
    );
};

export default ContactUs