import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Skills from '../Skills/Skills';

export default class Home extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Banner />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Footer />
      </div>
    )
  }
}
