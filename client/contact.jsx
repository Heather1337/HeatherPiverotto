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
        <form>
          <label>Send me a message:</label>
          <input id="visitorMessage" type="textarea" name="message" size="100"/>
          {/* <input type="textarea" size="100" style={{height: '200px'}}/> */}
          <button onClick={props.handleClick}>Send message</button>
        </form>
      </ContactMeDiv>
    )
};

export default contact;