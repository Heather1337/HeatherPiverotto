import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
 
import Home from './home.jsx';
import Navigation from './navigation.jsx'
import Portfolio from './portfolio.jsx';
import Contact from './contact.jsx';

const TopBarNavigation = styled.div`
  border: 1px solid red;
  margin-left: calc(50% - 50vw);
  width: 100vw;
`;

class App extends Component {
    render() {
      return (      
        <BrowserRouter>
          <div>

            <TopBarNavigation> 
              <Navigation />
            </TopBarNavigation>

            <TopBarNavigation>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/contact" component={Contact}/>
                <Route component={Error}/>
               </Switch>
            </TopBarNavigation>

          </div> 
        </BrowserRouter>
      );
    }
  };

ReactDOM.render(<App/>, document.getElementById('app'))