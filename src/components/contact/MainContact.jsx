import React from 'react'
import style from "./Contact.module.css"
import logo1 from "../../assest/contact/logo1.png"
import logo2 from "../../assest/contact/logo2.png"
import logo4 from "../../assest/contact/logo4.png"
import logo3 from "../../assest/contact/logo3.png"
export const MinContact = () => {
    const map=[
        {id:1,img:logo1},
        {id:2,img:logo2},
        {id:3,img:logo3},
        {id:4,img:logo4},
    ]
    const map2=map.map(a=>  <div className={style.testimotionals} key={a.id}>
        <div className={style.card}>
            <div className={style.layer}>

            </div>
            <div className={style.content}>
                <img src={a.img} alt="" />
            </div>

        </div>
    </div>)
    return (
        <div className={style.Contact}>
            <p>Contact Me</p>
            <h1>Get in Touch With Me
            </h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <div className={style.Client}>
              {map2}
            </div>
        </div>
    )
}
