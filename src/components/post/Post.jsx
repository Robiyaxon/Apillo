import Carousel from "react-elastic-carousel";
import React from 'react'
import style from "./Post.module.css"
import komp1 from "../../assest/contact/komp1.jpg"
import komp2 from "../../assest/contact/kommp2.jpg"
import komp3 from "../../assest/contact/komp3.jpg"
import { CommentOutlined, UserOutlined } from "@ant-design/icons";
export const Post = () => {
    const map =
        [
            { id: 1, img: komp1 },
            { id: 2, img: komp2 },
            { id: 3, img: komp3 },
        ]
    const map2 = map.map(a => <div className={style.Card1} key={a.id}>
        <div className={style.img}>
            <img src={a.img} alt="" />
        </div>
        <div className={style.users}>
            <p><b><UserOutlined style={{ color: "#888888", fontWeight: "bolder" }} /></b> Admin</p>
            <p><b><CommentOutlined style={{ color: "#888888" }} /></b> Comment</p>
            <h2>Mobile app Landing page Design & app Maintain</h2>
        </div>



    </div>)
    return (
        <div className={style.Post}>
            <p className={style.title}>Blog</p>
            <h1>Our Latest News & Post</h1>
            <Carousel>
                <div className={style.Wrapper}>
                    {map2}
                </div>
                <div className={style.Wrapper}>
                    {map2}
                </div>
                <div className={style.Wrapper}>
                    {map2}
                </div>
            </Carousel>
        </div>
    )
}
