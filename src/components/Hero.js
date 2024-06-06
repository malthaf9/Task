import React from "react";
import { ButtonGroup } from "flowbite-react";
import { useEffect, useState } from 'react';
import CardsComponent from "./CardsComponent";
import Fast from "./Fast";
import { Link, animateScroll as scroll } from 'react-scroll';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="updates" className={`transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <div className="text-center py-8">
        <img
          src="https://download.logo.wine/logo/Google_Chrome/Google_Chrome-Logo.wine.png"
          alt="Chrome Logo"
          className="mx-auto mb-2 w-26 h-24"
          style={{ marginTop: "-2rem" }}
        />
        <p className="text-6xl font-bold mb-4">
          The browser <br />
          built to be yours
        </p>
      </div>
      <div className={`sticky top-0 z-[20] py-2`}>
        <ButtonGroup className="text-center space-x-4 m-6 border mx-auto bg-white box-border rounded-full py-4 ml-[22rem] mr-[22rem]">
        <Link
            to="updates"
            smooth={true}
            duration={500}
            className="btn px-6 py-2 rounded-full hover:bg-gray-100 border-gray-300 cursor-pointer"
          >
            Updates
          </Link>
          <button className="btn px-6 py-2 rounded-full hover:bg-gray-100 border-gray-300">
            Yours
          </button>
          <button className="btn px-6 py-2 rounded-full hover:bg-gray-100 border-gray-300">
            Safe
          </button>
          <Link
            to="fast"
            smooth={true}
            duration={500}
            className="btn px-6 py-2 rounded-full hover:bg-gray-100 border-gray-300 cursor-pointer"
          >
            Fast
          </Link>
          <button className="btn px-6 py-2 rounded-full hover:bg-gray-100 border-gray-300">
            By Google
          </button>
        </ButtonGroup>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <h1>Need the Chrome installer?</h1>
          <a className="ml-4 inline-block" href="Download here.">
            Download here.
          </a>
        </div>
      </div>
      <div className={`transition-transform duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <CardsComponent isScrolled={isScrolled} />
        <Fast />
      </div>
    </div>
  );
};

export default Hero;







