import React from 'react';
import Waterpic from '../../images/water.jpg';

const Water = () => {
    return (
     <div className='water_container'>
         <h1>Water</h1>
         <div>
            <img src={Waterpic} alt='Perspired glass of water set on a rock near the shores of the ocean displayed to showcase water'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    </div>
    );
}

export default Water;