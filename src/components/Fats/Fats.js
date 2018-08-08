import React from 'react';
import fatsPic from '../../images/fats.png';



const Fats = () => {
    return (
        <div>
            <div className='nutrients_container'>
                <h1>Fats</h1>
                <div>
                <img src={fatsPic} alt='Abundance sources of fats such as salmon and avocado on a wooden table to showcase fats'/>
                <br/>
                <p>The fats you eat give your body energy that is needs to work properly. You also need fat to keep your skin and hair healthy. Fat also helps you absorb vitamins A, D, E, and K (the fat-soluble vitamins). Fat also fills your fat cells and insulates your body to help keep you warm </p>
                </div>
                <br/>
                <p>SOURCES: avocado, eggs, cheese, fatty fish, nuts, oil</p>
                <br/>
                <p>REFERENCES: medlineplus.gov</p>
            </div>
        </div>
    );
}

export default Fats;