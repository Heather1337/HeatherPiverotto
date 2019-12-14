import React from 'react';
import styled from 'styled-components';

const TechnologiesUsedDiv = styled.div`
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 14px;
`;

const AboutMe = styled.div`
  padding-top: 30px;
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
`;

const portfolio = (props) => {

    return (
        <TechnologiesUsedDiv>
          <AboutMe>I am a full-stack engineer with a passion for design and a fanatic about React. I thrive on the fast pace of the tech industry and love seeing my ideas come to fruition. I really enjoy finding creative solutions to problems, collaborating on ideas with teams of driven people, and discovering new technologies that can enhance an application's performance and user experience. In my spare time, you will find me either tinkering with my Lulzbot Taz6 3D printer, playing RPG/FPS games on my PC, learning French (currently in my 3rd year), or at the gym taking group fitness classes.</AboutMe>
          <h3>Technologies used:</h3>
          <p>Strong: JavaScript, React, jQuery, HTML, Node, Express, MongoDB, MySQL, Git, REST APIs, ES6, Styled-Components, Mongoose<br />Experienced: CSS, AWS EC2/Load Balancer, NewRelic, Sequelize, Jest, Artillery.io, Mocha, Chai, Babel, Webpack </p>
        </TechnologiesUsedDiv>
        
    )
}

export default portfolio;