import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
    <div>
        <div className='footer_container'>
          <div>
            <SocialIcon className='footer_social_icon'  url='https://twitter.com/Clayakn'/>
            <SocialIcon className='footer_social_icon'  url='https://github.com/Clayakn'/>
          </div>
        <p>Copyright by Andrew Nam</p>
        </div>
    </div>
    );
}

export default Footer;