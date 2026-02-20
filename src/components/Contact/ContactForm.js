// import React, { useState } from 'react'
// import style from './ContactForm.module.css'
// import { useForm } from "react-hook-form";
// import axios from 'axios'

// const ContactForm = () => {

//     const { register, handleSubmit, reset } = useForm();
//     const [status, setStatus] = useState("Submit")

//     const onSubmit = (data) => {
//         sendMail(data)
//         reset()
//     };

//     const sendMail = async (data) => {
//         setStatus("Sending...");
//         try {
//             await axios.post("http://localhost:5000/send", data)
//                 .then(res => {
//                     res.status === 200 ? setStatus("Message is send successfully!") : setStatus("Not send, try again!");
//                     console.log(res)
//                 })
//             let timer = setTimeout(() => {
//                 setStatus("submit")
//                 clearTimeout(timer)
//             }, 5000)
//         } catch (error) {
//             console.log(error.message)
//         }
//     }

//     const onErrors = errors => console.error(errors);

//     return (

//         <div className={style.contactForm}>
//             <form onSubmit={handleSubmit(onSubmit, onErrors)} autoComplete="off" >
//                 <div className={style.message}>Leave a message:</div>

//                 <div className={style.name}>
//                     <input type="text" placeholder="Name" id="name" {...register("name")} required />
//                 </div>

//                 <div className={style.email}>
//                     <input type="email" placeholder="Email" id="email" {...register("email")} required />
//                 </div>

//                 <div className={style.text}>
//                     <textarea name="formData" id="message" placeholder="Start typing..." {...register("message")} required />
//                 </div>

//                 <button type="submit" className={style.btn}>{status}</button>

//             </form>
//         </div>

//     )
// }

// export default ContactForm
