import { RadarChartOutlined } from '@ant-design/icons'
import React from 'react'
import girl from "../../assest/about/girl.png"
import style from "./Team.module.css"
export const Team = () => {
    const map = [
        { id: 1, name: "App Development", title: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
        { id: 2, name: "Web Development", title: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
        { id: 3, name: "UI/UX Design", title: "I throw myself down among the tall grass by the stream as I lie close to the earth." },
        { id: 4, name: "Digital Marketing", title: "I throw myself down among the tall grass by the stream as I lie close to the earth." }
    ]
    const map2 = map.map(a => <div className={style.testimotionals} key={a.id} id="team">
        <div className={style.card}>
            <div className={style.layer}>

            </div>
            <div className={style.content}>
                <div className={style.icon}>
                    <RadarChartOutlined />
                </div>

                <h2>{a.name}</h2>
                <p>{a.title}</p>
                <button>Read More +</button>
            </div>

        </div>
    </div>)
    return (
        <div className={style.Team}>
            <p className={style.Title}>What We Do</p>
            <h1>We are Optimists who Love to
                work <b style={{ color: "#e30281" }}> Together</b>.</h1>
            <div className={style.Block_Card}>
                {map2}
            </div>
            <div className={style.Project}>
                <div>
                    <p>Get It Touch</p>
                    <h2>Have a Project on Your Mind
                    </h2>
                    <button>Contact Me +</button>
                </div>
                <div><img src={girl} alt="" /></div>
            </div>
        </div>
    )
}
