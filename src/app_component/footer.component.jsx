import React from 'react';
import githublogo from './images/github.png';
import userlogo from './images/user.png'

import './footer.style.css';

const Footer = ()=>{
    return(
        <div className="container pt-3">
            <a href={"https://github.com/Rcheng1998/weather-app"}> <img src={githublogo} alt="githublogo"/></a>
            <a href={"https://rickiecheng.com"}> <img src={userlogo} alt="userlogo"/></a>

            <div className="container">
             <p>Check out the github and my website!</p>
            </div>
        </div>
    );
};

export default Footer;