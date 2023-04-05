import React from "react";
 
import background from "./images/contactme.png";
import background2 from "./images/project.png";
import linkedin from "./images/contactmeimages/Linkedin.svg.png";
import github from "./images/contactmeimages/github1.png";
import twitter from "./images/contactmeimages/Twitterlogo.svg.webp";
function Contactme() {
  return (
    <div id="contactme" style={{ backgroundImage: `url(${background2})` }}>
      <div>
        <h1 className="flex justify-center text-4xl md:text-5xl pt-10 pb-12 font-Header text-gray-400">
          Contact Me
        </h1>
      </div>
      <div className="h-20 w-full">
        <div className="flex justify-center">
          <a href="https://www.linkedin.com/in/utkarsh-sathawane-852060207/">
            {/* <LinkedInIcon fontSize="large" sx={{ color: "#0A66C2" }} /> */}
            <img className='h-8 w-9 rounded-lg ' src={linkedin}></img>
          </a>
          <a href="https://github.com/Utkarsh44484">
          <img className='h-8 w-9  rounded-lg mx-12 bg-slate-100' src={github}></img>

          </a>
          <a href="https://twitter.com/Utkarsh61570264?t=A4Oia7P99e9fsU2Nw83kmA&s=09">
          <img className='h-8 w-9 rounded-lg ' src={twitter}></img>

          </a>
        </div>
      </div>
    </div>
  );
}
export default Contactme;
