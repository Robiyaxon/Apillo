import React from 'react'
import style from "./Plan.module.css"
export const Plan = () => {
    const map=[
{id:1, classText:style.Text, classP:style.Header__Plan, classD:style.Doller, class:style.Card1, buttonClass:style.button1},
{id:2, classText:style.Text2, classP:style.Header__Plan2, classD:style.Doller2, class:style.Card2, buttonClass:style.button2},
{id:3, classText:style.Text, classP:style.Header__Plan, classD:style.Doller, class:style.Card1, buttonClass:style.button1}
    ]
    const map2= map.map(a=>
        <div className={a.class} key={a.id} id="service">
            <h1 className={a.classD}><sup>$</sup> 59</h1>
            <h2 className={a.classP}>Starter Plan</h2>
            <p className={a.classText}>1 Home Page</p>
            <p className={a.classText}>2 Home Page Design</p>
            <p className={a.classText}>Unlimited Inner Page</p>
            <p className={a.classText}>50 Elements</p>
            <p className={a.classText}>Support</p>
            <p className={a.classText}>Vector Design</p>
            <button className={a.buttonClass}>Purchase Now  +</button>
    </div>)
  return (
    <div className={style.Plan}>
        <p className={style.title}>Pricing</p>
        <h1 className={style.description}>Reasonable Pricing Plan</h1>
        <h2 className={style.label}>Labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
viverra maecenas accumsan lacus vel facilisis.</h2>
<div className={style.Blog}>
    {map2}
</div>
    </div>
  )
}
