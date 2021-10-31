import React from "react";
import "../components/css/style.css";
import gctlogo from "../components/images/GCT.png";
import DSP from "../components/images/DSP.jpeg";
import MPMC from "../components/images/MPMC.jpeg";
import VLSI from "../components/images/VLSI.jpeg";
import EMBEDDED from "../components/images/EMBEDDED.jpeg";
// import About from "./LinkPages.js/About";
import { Link } from "react-router-dom";
// import about from "../components/LinkPages.js/About";
// import vismis from "../components/LinkPages.js/Vismis";

function Homepage() {
  return (
    <div className="container">
      <div className="main-nav">
        <img src={gctlogo} alt="GCT_LOGO" className="logo" />
        <p className="instname">
          Government College of Technology, Coimbatore-13
        </p>
        <ul className="menu-item">
          <li>
            {/* <a href="About">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="./js/vision.html">Vision and Mission</a> */}
            <Link to="/vision">Vision and Mission</Link>
          </li>
          <li>
            {/* <a href="./js/staffdetails.html">Staff Details</a> */}
            <Link to="/staffdetails">Staff Details</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1MYygmzUKMq6VUlCB6hMFNKL-Zlp45T8K/view?usp=sharing">
              Syllabus
            </a>
          </li>
          <li>
            {/* <a href="./js/login.html">Login</a> */}
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      <header className="showcase">
        {/* <h2>Government College of Technology, Coimbatore-13</h2> */}
        <p>Electronics and Communication Engineering</p>
        {/* <a href="./js/about.html" className="button about-button">
          About <i className="fas fa-chevron-right"></i>
        </a> */}
        <Link to="/about" className="button about-button">
          About
          <i className="fas fa-chevron-right"></i>
        </Link>
      </header>

      <div className="name-cards">
        <div>
          <img src={DSP} alt="DSP" />
          <h3>DSP LABORATORY</h3>
          <p>
            Digital Signal Processing Lab is used by UG and PG students in an
            elective course on Digital Signal Processor. The lab has Texas
            Instruments DSP kits for carring out various experiments.
          </p>
          <a href="./js/dsp.html">
            Learn More <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div>
          <img src={MPMC} alt="" />
          <h3>EMBEDDED LABORATORY</h3>
          <p>
            Embedded Labs are teams of IPA and public sector employees working
            side-by-side to strengthen the use of data and evidence in public
            policy. Each lab works on a variety of activities to equip IPA's
            partners to regularly use evidence to improve their decision-making,
            policies, and programs.
          </p>
          <a href="/#">
            Learn More <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div>
          <img src={VLSI} alt="" />
          <h3>VLSI LABORATORY</h3>
          <p>
            The Vlsi Design Laboratory Is Established With The Aim Of Conducting
            Research In Various Aspects Of The Ever Growing Field Of Very Large
            Scale Integration (Vlsi) And Establishing Links Between Industrial
            Companies.
          </p>
          <a href="#">
            Learn More <i className="fas fa-chevron-right"></i>
          </a>
        </div>

        <div>
          <img src={EMBEDDED} alt="" />
          <h3>MPMC LABORATORY</h3>
          <p>
            To develop and execute variety of assembly language programs of
            Intel 8086 including. arithmetic and logical, sorting, searching,
            and string manipulation operations. • To develop and execute the
            assembly language programs for interfacing Intel 8086 with.
          </p>
          <a href="#">
            Learn More <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>

      <div className="xbox">
        <div className="placement">
          <h3>PLACEMENTS</h3>
          <p>Get your Opprutunities here and make your life better</p>
          <a href="./js/placement.html" className="button">
            Get Details <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Homepage;
