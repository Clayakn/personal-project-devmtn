import React from 'react';
import fatsPic from '../../images/fats.png';



const Fats = () => {
    return (
        <div className='nutrients_container'>
        <h1>Fats</h1>
         <div>
            <img src={fatsPic} alt='Abundance sources of fats such as salmon and avocado on a wooden table to showcase fats'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
    </div>
    );
}

export default Fats;