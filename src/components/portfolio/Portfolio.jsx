import React from 'react'
import { Tabs } from 'antd';
import style from "./Portfolio.module.css"
import tel1 from "../../assest/portfolio/tel1.png"
import tel2 from "../../assest/portfolio/tel2.png"
import tel3 from "../../assest/portfolio/tel3.png"
const { TabPane } = Tabs;
export const Portfolio = () => {
    const map = [
        { id: 1, name: "The Services Provide for Web Design", img: tel1 },
        { id: 2, name: "The Services Provide for App Development", img: tel2 },
        { id: 3, name: "The Services Provide for Marketing", img: tel2 },
        { id: 4, name: "The Services Provide for App Development", img: tel3 },
    ]
    const map2 = map.map(a => <div className={style.Block} key={a.id} >
        <div className={style.Card1}>
            <h2>Product Design</h2>
            <h1>{a.name}</h1>
            <p>Disse ultrices gravida. Risus comod viverra maecenas accumsan Lacus vel facilisis.</p>
            <button>Explore More  +</button>
        </div>
        <div className={style.Card2}><img src={a.img} alt="" /></div>
    </div>)
    return (
        <div className={style.Portfolio}>
            <p className={style.title}>Portfolio</p>
            <h1 className={style.description}>My Creative Works</h1>
            <Tabs defaultActiveKey="1" >
                <TabPane tab="All Works" key="1" className={style.Tabs}>
                    {map2}
                </TabPane>
                <TabPane tab="Web Development" key="2" className={style.Tabs}>
                    <div className={style.Block}>
                        <div className={style.Card1}>
                            <h2>Product Design</h2>
                            <h1>The Services Provide for Web Design</h1>
                            <p>Disse ultrices gravida. Risus comod viverra maecenas accumsan Lacus vel facilisis.</p>
                            <button>Explore More  +</button>
                        </div>
                        <div className={style.Card2}><img src={tel3} alt="" /></div>
                    </div>
                    <div className={style.Block}>
                        <div className={style.Card1}>
                            <h2>Product Design</h2>
                            <h1>The Services Provide for Web Design</h1>
                            <p>Disse ultrices gravida. Risus comod viverra maecenas accumsan Lacus vel facilisis.</p>
                            <button>Explore More  +</button>
                        </div>
                        <div className={style.Card2}><img src={tel1} alt="" /></div>
                    </div>
                </TabPane>
                <TabPane tab="UI/UX Design" key="3" className={style.Tabs}>
                    <div className={style.Block}>
                        <div className={style.Card1}>
                            <h2>Product Design</h2>
                            <h1>The Services Provide for App Development</h1>
                            <p>Disse ultrices gravida. Risus comod viverra maecenas accumsan Lacus vel facilisis.</p>
                            <button>Explore More  +</button>
                        </div>
                        <div className={style.Card2}><img src={tel1} alt="" /></div>
                    </div>
                    <div className={style.Block}>
                        <div className={style.Card1}>
                            <h2>Product Design</h2>
                            <h1>The Services Provide for App Development</h1>
                            <p>Disse ultrices gravida. Risus comod viverra maecenas accumsan Lacus vel facilisis.</p>
                            <button>Explore More  +</button>
                        </div>
                        <div className={style.Card2}><img src={tel2} alt="" /></div>
                    </div>
                </TabPane>
            </Tabs>
        </div>
    )
}
