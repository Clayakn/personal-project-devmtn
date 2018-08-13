import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import routes from './routes';



class App extends Component {


  render() {
    return (
      <div>
        <div className='app'>
          <Nav />
          {routes}
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
