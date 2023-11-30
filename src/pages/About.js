import React from "react";
import Logo2 from "../assets/Logo2.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Logo2})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Chocolate has been prepared as a drink for nearly all of its history. For example, one vessel found at an Olmec archaeological site on the Gulf Coast of Veracruz, Mexico, dates chocolate's preparation by pre-Olmec peoples as early as 1750 BC.[6] On the Pacific coast of Chiapas, Mexico, a Mokaya archaeological site provides evidence of cocoa beverages dating even earlier to 1900 BC.[7][6] The residues and the kind of vessel in which they were found indicate the initial use of cocoa was not simply as a beverage; the white pulp around 
        the cocoa beans was likely used as a source of fermentable sugars for an alcoholic drink.
          
        </p>
      </div>
    </div>
  );
}

export default About;