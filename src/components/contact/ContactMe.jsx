import React from 'react'
import style from "./ContactMe.module.css"
import boy from "../../assest/contact/boy.jpg"
export const ContactMe = () => {
    return (
        <div className={style.ContactMe} id="contact">
            <div className={style.Card1}>
                <p>Contact Me</p>
                <h2>Get in Touch With Me</h2>
            </div>
            <div className={style.Card2}>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </h2>
            </div>
            <div className={style.WrapperInput}>

                <div className={style.InputType}>
                    <input type="text" className={style.Input1} placeholder="First Name" />
                    <input type="text" className={style.Input1} placeholder="Last Name" />
                </div>

                <input type="text" className={style.Input2} placeholder="Email" />
                <input type="text" className={style.Input2} placeholder="Subject" />
                <input type="text" className={style.Input4} placeholder="Message" />
                <div className={style.testimotionals}>
                    <div className={style.card}>
                        <div className={style.layer}>

                        </div>
                        <div className={style.content}>
                            <p> Submit Now +</p>
                        </div>

                    </div>
                </div>

            </div>
            <div className={style.Conact}>
<img src={boy} alt="" />
            </div>
        </div>
    )
}
