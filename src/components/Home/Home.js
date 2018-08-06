import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Water from '../../images/water-background.png';
import Carbs from '../../images/carbs-background.png';
import Vitamins from '../../images/vitamins-background.png';
import Fats from '../../images/fats-background.png';
import Minerals from '../../images/minerals-background.png';
import Protein from '../../images/protein-background.png';



class Home extends Component {

  render() {
    return (
      <div className='home_container'>
      <div style={{padding: '0 15px'}}>
      <br />
      <h1 style={{textAlign: 'center'}}> Home</h1>
      <br />
      <p style={{textDecoration: 'underline #90AFC5', paddingBottom: 5}}>Purpose of Nutrition Made Easy:</p>
      <p>This is a quick starter guide on eating healthy. Our goal is to make nutrition easy to understand so that you can make better decisions about your eating habits. But what does nutrition exactly consist of? </p>
      <br />
      <h3 style={{textAlign: 'center'}}>Below are 6 major groups of nutrients</h3>
      <br />
      <div className='home_section'>
       <Link to='/water'><img className='home_circle' src={Water} alt='Water cut in circular pattern that routes to glossary-water'/> </Link>
       <Link to='carbs'><img className='home_circle' src={Carbs} alt='Sliced bananas to represent carbohydrate icon'/></Link>
      </div>
      <div className='home_section'>
      <Link to='/vitamins'><img className='home_circle' src={Vitamins} alt='Table with bundle of lemons laid out to represent vitamins category'/></Link>
      <Link to='/fats'><img className='home_circle' src={Fats} alt='Scoops of butter in white glass bowl to represent fats category'/></Link>
      </div>
      <div className='home_section'>
      <Link to='/minerals'><img className='home_circle' src={Minerals} alt='Scoops of butter in white glass bowl to represent fats category'/></Link>
      <Link to='/protein'><img className='home_circle' src={Protein} alt='One cracked egg to represent protein category'/></Link>
      </div>
      </div>
      </div>
    );
  }
}

export default Home;