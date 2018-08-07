import React from 'react';
import Banner from '../../images/banner.png';
import BannerLarge from '../../images/banner-large.png';


const Header = () => {
    return (
    <div>
        <div className='small'>
          <img className='header_logo' src={Banner} alt='Banner for Nutrition Made Easy with a leaf logo'/>
        </div>
        <div className='large'>
          <img className='header_logo' src={BannerLarge} alt='Banner for Nutrition Made Easy with a leaf logo'/>
        </div>
    </div>
    );
}

export default Header;