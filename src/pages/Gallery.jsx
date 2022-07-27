import React from "react";
import "../App.css";
import PwcProject1 from "../assets/pwcProject1.jpg";
import PwcProject2 from "../assets/pwcProject2.jpg";
import PwcProject3 from "../assets/pwcProject3.jpg";
import PwcProject4 from "../assets/pwcProject4.jpg";
import PwcProject5 from "../assets/pwcProject5.jpg";
import PwcProject6 from "../assets/pwcProject6.jpg";
import PwcProject7 from "../assets/pwcProject7.jpeg";
import PwcProject8 from "../assets/pwcProject8.jpeg";
import PwcProject9 from "../assets/pwcProject9.jpeg";
import PwcProject10 from "../assets/pwcProject10.jpeg";

function gallery() {
  return (
    <div>
      <h2>Project Gallery</h2>
      <section style={{ display: "block" }}>
        <div className="grid-container">
          <div className="image">
            <img src={PwcProject1} alt="" />
            <p>The Experience Center Project</p>
            <img src={PwcProject2} alt="" />
            <p>The Talent Tech Bootcamp Project</p>
            <img src={PwcProject3} alt="" />
            <p>The PwC Trade Booth Project</p>
          </div>
          <div className="image">
            <img src={PwcProject4} alt="" />
            <p>The PwC BookCase Project</p>
            <img src={PwcProject5} alt="" />
            <p>The PwC Interior Design Project</p>
            <img src={PwcProject6} alt="" />
            <p>The PwC Digital Tech Project</p>
          </div>
          <div className="image">
            <img src={PwcProject7} alt="" />
            <p>The PwC Solar Project</p>
            <img src={PwcProject8} alt="" />
            <p>The Experience Center Project</p>
            <img src={PwcProject9} alt="" />
            <p>The PwC office building Project</p>
          </div>
          <div className="image">
            <img src={PwcProject10} alt="" />
            <p>The PwC Daylighting Project</p>
            <img src={PwcProject4} alt="" />
            <p>The PwC BookCase Project</p>
            <img src={PwcProject7} alt="" />
            <p>The PwC Solar Project</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default gallery;
