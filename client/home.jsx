import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 95%;
  font-size: 12px;
  margin 20px auto;
  border: 1px solid orange;
`;

const HomePageTopBar = styled.div`
  margin-left: calc(50% - 50vw);
  width: 100vw;
`;

const HeatherPiverottoTitle = styled.h1`
  padding-left: 20px;
`;


 
const Home = () => {
    return (
       <div>
          <HomePageTopBar>
            <HeatherPiverottoTitle id="homeTitle">HeatherPiverotto</HeatherPiverottoTitle>
          </HomePageTopBar>

          <HomePageTopBar>
            <Footer>Heather Piverotto 2019</Footer>
          </HomePageTopBar>
       </div>
    );
};
 
export default Home;