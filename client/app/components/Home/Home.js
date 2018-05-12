import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom' 
import 'whatwg-fetch';
import HelloWorld from '../HelloWorld/HelloWorld';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: []
    };

    //this.newCounter = this.newCounter.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
  }

  // newCounter() {
  //   fetch('/api/counters', { method: 'POST' })
  //     .then(res => res.json())
  //     .then(json => {
  //       let data = this.state.counters;
  //       data.push(json);

  //       this.setState({
  //         counters: data
  //       });
  //     });
  // }

  loginHandler({history}){
    console.log(" loginHandler ");
    history.push('/helloworld')
  }

  render() {
    return (
      <>
          <div>
            <label htmlFor="username">Name: </label>
            <input type="text" id="username"></input>
          </div>

          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password"></input>
          </div>

        <button><Link to="/landing-page">Login</Link></button>
      </>
    );
  }
}

export default Home;
