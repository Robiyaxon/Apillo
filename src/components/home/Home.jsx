import React from 'react'
import { Header } from './header/Header'
import { About } from './../about/About';
import { Team } from './../team/Team';
import { Portfolio } from '../portfolio/Portfolio';
import { Plan } from '../plan/Plan';
import { MinContact } from '../contact/MainContact';
import { ContactMe } from '../contact/ContactMe';
import { Post } from '../post/Post';
import { Footer } from '../footer/Footer';

export const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Team />
      <Portfolio />
      <Plan />
      <MinContact />
      <ContactMe />
      <Post />
      <Footer/>
    </div>
  )
}
