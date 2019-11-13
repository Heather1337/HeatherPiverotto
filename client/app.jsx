import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: []
        }
    }

    render() {
        return (
            <div>
                <h1>Heather Piverotto</h1>
            </div>
        )
    }
};

ReactDOM.render(<App/>, document.getElementById('app'))