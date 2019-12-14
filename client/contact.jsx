import React from 'react';
import styled from 'styled-components';

const ContactMeDiv = styled.div`
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 14px;
`;

const contact = (props) => {
    return (
      <ContactMeDiv>
        <p>Heather Piverotto<br />Location: San Francisco<br />email: heatherlynn1337@gmail.com <br /></p>
      </ContactMeDiv>
    )
};

export default contact;