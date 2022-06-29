import React, { useState } from 'react'
import style from "./About.module.css"
import boy from "../../assest/about/boy.png"
import { DownloadOutlined, StarFilled } from '@ant-design/icons'
export const About = () => {
  const [text, setText] = useState("User Experience Design - UI/UX")
  return (
    <div className={style.AboutUs} id="about">
      <div className={style.Card1}>
        <img src={boy} alt="" />
      </div>
      <div className={style.Card2}>
        <p>About Ramon</p>
        <h1>5 Year’s Exprience on Product <b style={{ color: "#e70280" }}>Design</b>. </h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <div className={style.Buttons}>
          <button onClick={(e) => setText("Bachelor of Arts (B.A.)")} type='button' className={style.button1}>Main Skills</button>
          <button type='button' onClick={(e) => setText("UX Design Awards 2021")} className={style.button2}>Awards</button>
          <button type='button' onClick={(e) => setText("User Experience Design - UI/UX")} className={style.button1}>Education</button>
        </div>
        <div className={style.Education}>
          <h3><b><StarFilled style={{ color: "red" }} /></b> {text}
          </h3>
          <h4>
            {text}
          </h4>
          <h3><b><StarFilled style={{ color: "red" }} /></b> UX Design Awards 2021
          </h3>
          <h4>
            {text}
          </h4>
        </div>
        <button type='button' className={style.Download}>Download CV <DownloadOutlined/></button>
      </div>
    </div>
  )
}
