import React from 'react';
import carbsPic from '../../images/carbohydrates.png';



const Carbs = () => {
    return (
     <div className='nutrients_container'>
        <h1>Carbohydrates</h1>
         <div>
            <img src={carbsPic} alt='Abundance sources of carbohydrates such as bananas and bread on a wooden table to showcase carbohydrates'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    </div>
    );
}

export default Carbs;