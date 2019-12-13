import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavButtonDiv = styled.div`
  border: 1px solid blue;
  margin-left: calc(50% - 50vw);
  width: 100vw;
  display: inline-block;
`;

const Navigation = () => {
    return (
       <NavButtonDiv>
          <NavLink to="/" className="homeNavLink">Home</NavLink>
          <NavLink to="/portfolio" className="portfolioNavLink">Portfolio</NavLink>
          <NavLink to="/contact" className="contactNavLink">Contact</NavLink>
       </NavButtonDiv>
    );
}
 
export default Navigation;