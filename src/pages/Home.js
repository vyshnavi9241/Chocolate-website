import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${logo})` }}>
      <div className="headerContainer">
        <h1><u><b> "CHOCOLATE WORLD" </b></u></h1>
        <p><marquee>😋Chocolate : a little piece of heaven. </marquee></p>
        <Link to="/menu">
          <button> ORDER NOW </button>
       
        </Link>
      </div>
    </div>
    
  );
}

export default Home;