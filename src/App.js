import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import routes from './routes';



class App extends Component {


  render() {
    return (
      <div className='app'>
       <Header />
        <Nav />
        {routes}
      </div>
    );
  }
}


export default App;
