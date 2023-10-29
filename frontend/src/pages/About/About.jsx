import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to our vibrant community of book enthusiasts! We are a passionate group of literary aficionados dedicated to fostering a love for reading and sharing the joy of storytelling. Our platform is a haven for bibliophiles of all kinds, offering a diverse collection of reviews, recommendations, and engaging discussions. Whether you're an avid reader, a casual bookworm, or someone exploring the world of literature, we are here to celebrate the magic of books together.

Happy reading and exploring!</p>
            <p className='fs-17'> Join us in our journey to explore the captivating worlds that reside between the pages and connect with fellow book lovers who share your passion.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About