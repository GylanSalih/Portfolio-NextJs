// src/Pages/Home/Home.jsx
import React from 'react';
import Carousel from './components/Carousel/Carousel'; 
import Skills from "./components/Skills/Skills";
import CallToAction from './components/CallToAction/CallToAction';
import AboutMe from "./components/AboutMe/AboutMe";
import Features from './components/Features/Features';
import CompanyCarousel from './components/CompanyCarousel/CompanyCarousel.jsx';
import TextCarousel from './components/TextCarousel/TextCarousel';
// import CustomModel from "./components/CustomModel/CustomModel";
import './styles/home-page.css';
import FeaturesInteractive from './components/FeatureInteractive/FeaturesInteractive';
import TestimonialsGrid from './components/TestimonialsGrid/TestimonialsGrid';

const Home = () => {
  return (
    <div className="page home-page">

      <Carousel />
      <Features />
      <FeaturesInteractive/>
      <TestimonialsGrid/>
      <CallToAction />
    </div>
  );
};

export default Home;
