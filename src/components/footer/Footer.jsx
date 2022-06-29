import React from 'react'
import style from "./Footer.module.css"
import logo from "../../assest/home/logo.png"
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
export const Footer = () => {
    return (
        <div className={style.Footer}>
            <img src={logo} alt="" />
            <p>Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                viverra maecenas accumsan lacus vel facilisis.</p>
            <div className={style.Block2}>
                <div className={style.href}>
                    <a href="/" >  <FacebookFilled  /></a>
                </div>
                <div className={style.href}>
                    <a href="/" >  <InstagramFilled /></a>
                </div>
               
            </div> <hr style={{ color: "red" }} />
                <h4>Copyright © 2021 <b style={{ color: "#e70280" }}> Appilo-Themes.</b> All Rights Reserved.</h4>
        </div>
    )
}
