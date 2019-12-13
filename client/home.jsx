import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 95%;
  font-size: 12px;
  margin 20px auto;
  border: 1px solid orange;
`;

const AboutMe = styled.div`
  width: 95%;
  font-size: 18px;
  margin 20px auto;
  border: 1px solid red;
`;

const HomePageTopBar = styled.div`
  margin-left: calc(50% - 50vw);
  width: 100vw;
`;


 
const Home = () => {
    return (
       <div>
          <HomePageTopBar>
            <h1 id="homeTitle">HeatherPiverotto</h1>
          </HomePageTopBar>

          <HomePageTopBar>
            <AboutMe>I am a full-stack engineer with a passion for design and a fanatic about React. I thrive on the fast pace of the tech industry and love seeing my ideas come to fruition. I really enjoy finding creative solutions to problems, collaborating on ideas with teams of driven people, and discovering new technologies that can enhance an application's performance and user experience. In my spare time, you will find me either tinkering with my Lulzbot Taz6 3D printer, playing RPG/FPS games on my PC, learning French (currently in my 3rd year), or at the gym taking group fitness classes.</AboutMe>
          </HomePageTopBar>

          <HomePageTopBar>
            <Footer>Heather Piverotto 2019</Footer>
          </HomePageTopBar>
       </div>
    );
};
 
export default Home;