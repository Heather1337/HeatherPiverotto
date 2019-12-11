import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './home.jsx';
import Navigation from './navigation.jsx'
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';


class App extends Component {
    render() {
      return (      
         <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/portfolio" component={Portfolio}/>
               <Route path="/contact" component={Contact}/>
              <Route component={Error}/>
             </Switch>
          </div> 
        </BrowserRouter>
      );
    }
  }


// import React from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components';

// import Portfolio from './portfolio.jsx';

// const MainPage = styled.div`
//   background-color: #ddd3ee;
//   width: 95%;
//   margin: 20px auto;
//   border: 1px solid purple;
// `;

// const HeaderLeft = styled.div`
//   display: inline-block;
//   float: left;
//   border: 2px solid blue;
// `;

// const HeaderRight = styled.div`
//   display: inline-block;
//   margin-left: 500px;
//   border: 2px solid blue;
// `;

// const HeaderWrapper = styled.div`
//   width: 95%;
//   margin: 20px auto;
//   border: 1px solid black;
// `;

// const Footer = styled.div`
//   width: 95%;
//   margin 20px auto;
//   border: 1px solid orange;
// `;


// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//           data: []
//         }
//     }

//     render() {
//         return (
//             <div>

//               <HeaderWrapper id='header'>
//                 <HeaderLeft>
//                   <h1 id="">heatherpiverotto.dev</h1>
//                 </HeaderLeft>
//                 <HeaderRight>
//                   <h1 id="">Portfolio</h1>
//               </HeaderRight>
//               </HeaderWrapper>

//               <MainPage>
//                 <h1>medium articles</h1>
//                 <Portfolio/>
//               </MainPage>

//               <Footer>
//                   2019 Heather Piverotto 
//               </Footer>
              

//             </div>
//         )
//     }
// };

ReactDOM.render(<App/>, document.getElementById('app'))