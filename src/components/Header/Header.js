import React from 'react';
import Banner from '../../images/banner.png';


const Header = () => {
    return (
     <div>
    <img className='header_logo' src={Banner} alt='Banner for Nutrition Made Easy with a leaf logo'/>
    </div>
    );
}

export default Header;