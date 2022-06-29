import React, { useEffect, useState } from 'react'
import style from "./TopHeader.module.css"
import logo from "../../assest/home/logo.png"
import drawer from "../../assest/home/drawer.png"
import { Drawer, Dropdown, Menu } from 'antd';
import DrowerPage from "./DrowerPage.jsx"
import { NavLink } from "react-router-dom"; import { MessageOutlined } from '@ant-design/icons';
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            About v.1
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            About v.2
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            About v.3
          </a>
        ),
      }
    ]}
  />
);
const menu2 = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Team v.1
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Team v.2
          </a>
        ),
      }
    ]}
  />
);
const menu3 = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Service v.1
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Service v.2
          </a>
        ),
      }
    ]}
  />
);
const menu4 = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            Contact v.1
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a className={style.Href} target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            Contact v.2
          </a>
        ),
      }
    ]}
  />
);
export const TopHeader = () => {
  const [scroll, setScroll] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const showDrawer1 = () => {
    setVisible1(true);
  };

  const onClose1 = () => {
    setVisible1(false);
  };
  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, [scroll])

  const showDrawer = () => {
    setVisible(true);
  };
  const click = () => {
    setVisible(false);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY < 100) {
      setScroll("");
    } else {
      setScroll(style.scroller);
    }
  });

  ;
  const map35 = [
    { id: 1, to: "#about", menu: menu, name: "About" },
    { id: 2, to: "#team", menu: menu2, name: "Team" },
    { id: 4, to: "#service", menu: menu3, name: "Service" },
    { id: 5, to: "#contact", menu: menu4, name: "Contact" },
  ]
  const onClose = () => {
    setVisible(false);
  };
  const map34 = map35.map(a => <Dropdown key={a.id} overlay={a.menu} placement="bottom">
    <a href={a.to}>{a.name} <b style={{ color: "#e50281" }}>+</b></a>
  </Dropdown>)
  const map90 = map35.map(a =>  <a className={style.DrawerHref} onClick={onClose} href={a.to} key={a.id}> {a.name} <b style={{ color: "#e50281" }}>+</b></a>)
  return (
    <>
      <Drawer className={style.DrawerResponce} placement="right" onClose={onClose} visible={visible}>
        <div className={style.Drawer_Block_Navlink + " " + style.stroke}  >
          <NavLink to="/" className={style.DrawerHref}>
            <sup>  <span className={style.News} onClick={showDrawer1}>New</span></sup> Demos</NavLink>
          {map90}
          <button type='button' className={style.Button} onClick={click}>Let's Chat  <MessageOutlined className={style.Icon} /></button>
        </div>
      </Drawer>
      <Drawer title="" placement="left" onClose={onClose1} visible={visible1}>
        <DrowerPage />
      </Drawer>
      <div className={style.TopHeader + " " + scroll}>
        <div>
          <NavLink to="/"> <img src={logo} alt="" /></NavLink>
        </div>
        <div className={style.Block}>
          <div className={style.NavLink}>
            <NavLink to="/" onClick={showDrawer1} className={style.news_body}>
              <sup>  <span className={style.News}>New</span></sup> Demos</NavLink>
            {map34}
          </div>
          <button type='button' className={style.Button}>Let's Chat  <MessageOutlined className={style.Icon} /></button>

        </div><div className={style.Drawer_Block}>
          <img src={drawer} alt="" onClick={showDrawer} />
        </div>

      </div>
    </>

  )
}
