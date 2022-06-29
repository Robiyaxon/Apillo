import React from 'react'
import style from "./Home.module.css"
import img from "../../../assest/home/aylana.png"
import Typed from 'react-typed';
import boy from "../../../assest/home/boy.png"
import figma from "../../../assest/home/figma.png"
import fshop from "../../../assest/home/fshop.png"
import { DownloadOutlined } from '@ant-design/icons';
export const Header = () => {
  return (
    <div className={style.Home}>
      <div className={style.Card1}>
        <img src={img} alt="" />
        <p>Welcome to My World  </p>
        <h1>Hi I’m Jon
          <span>
            <Typed
              strings={[
                'Ramon',
                'Walter',
                'Porter']}
              typeSpeed={70}
              backSpeed={70}
              loop >
            </Typed>
          </span>

        </h1>
        <h2>Product Designer</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</h3>
        <div className={style.Buttons}>
          <div className={style.testimotionals}>
            <div className={style.card}>
              <div className={style.layer}>
              </div>
              <h5>Hire Me</h5>
            </div>
          </div>
          
          <button type='button' className={style.Button2}>Download CV
            <DownloadOutlined /></button>
        </div>
      </div>
      <div className={style.Card2}>
        <img className={style.Figma} src={figma} alt="" />
        <img className={style.boy} src={boy} alt="" />
        <div className={style.Design__Icon}>
          <img className={style.fshop} src={fshop} alt="" />
        </div>
      </div>
    </div>
  )
}
