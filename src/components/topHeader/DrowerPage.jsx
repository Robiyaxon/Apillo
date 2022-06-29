import React from 'react'
import style from "./DrowerPage.module.css"
import img1 from "../../assest/drower/drower2.jpg"
import img2 from "../../assest/drower/img1.jpg"
import img3 from "../../assest/drower/img3.jpg"
const DrowerPage = () => {
    const map = [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 },
        { id: 4, img: img1 },
        { id: 5, img: img2 },
        { id: 6, img: img3 },
        { id: 7, img: img1 },
        { id: 8, img: img2 },
        { id: 9, img: img3 },
        { id: 10, img: img1 },
        { id: 11, img: img2 },
        { id: 12, img: img3 },
        { id: 13, img: img1 },
    ]
    const map2 = map.map(a => <div class={style.container} key={a.id}>
        <img src={a.img} alt="" />
        <div class={style.overlay}>
            <button>One Day</button>
        </div> </div>)
    return (
        <div className={style.DrowerPage}>
            <h1>Pre-Built Demos Collection</h1>
            <p>Appilo comes with a beautiful collection of modern, easily importable, and highly customizable demo layouts.</p>
            <div className={style.Block}>
                {map2}
            </div>
        </div>
  )
}
export default DrowerPage