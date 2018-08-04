import React from 'react';
import Logo from '../../images/natural-food-logo.png';


const Header = () => {
    return (
     <div>
    <img className='header_logo' src={Logo} alt='Leaf icon for Nutrition Made Easy Logo'/>
    Nutrition Made Easy
    </div>
    );
}

export default Header;