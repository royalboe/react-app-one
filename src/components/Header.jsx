import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/pwc.jpeg";
import Counter from "./Counter";

function Header() {
  return (
    <header>
      <div>
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div>
        <h3>PwC Career Website</h3>
      </div>
      <div>
        {" "}
        <Counter />
      </div>
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/ApplicationForm">Application Form</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/StudentsData">Students Data</Link>
      </div>
    </header>
  );
}

export default Header;
