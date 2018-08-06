import React from 'react';
import Waterpic from '../../images/water.jpg';

const Water = () => {
    return (
     <div className='nutrients_container'>
         <h1>Water</h1>
         <div>
            <img src={Waterpic} alt='Perspired glass of water set on a rock near the shores of the ocean displayed to showcase water'/>
            <br/>
            <p>Your body depends on water to survive. Every cell, tissue, and organ in your body needs water to work properly. For example, your body uses water to maintain its temperature, remove waste, and lubricate your joints. Water is needed for overall good health. </p>
            <br/>
            <p>REFERENCES: familydoctor.org</p>
        </div>
    </div>
    );
}

export default Water;