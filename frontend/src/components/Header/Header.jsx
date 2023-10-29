import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Dear Book Lovers,

Welcome to our literary sanctuary! Indulge in the magic of storytelling and the captivating realms that await within the pages of our carefully curated collection. Unwind, escape, and embark on extraordinary journeys through the power of words. Whether you seek classic tales that have stood the test of time or contemporary narratives that ignite your imagination, our shelves are brimming with treasures for every avid reader. Immerse yourself in the enchanting universe of literature and let the stories ignite your passion for the written word.

Happy reading!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header