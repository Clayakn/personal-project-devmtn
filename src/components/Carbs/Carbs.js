import React from 'react';
import carbsPic from '../../images/carbohydrates.png';



const Carbs = () => {
    return (
     <div className='nutrients_container'>
        <h1>Carbohydrates</h1>
         <div>
            <img src={carbsPic} alt='Abundance sources of carbohydrates such as bananas and bread on a wooden table to showcase carbohydrates'/>
            <p>Carbohydrates help provide energy for our body. There are three main types of carbohydrates found in foods: sugars, starches, and fiber. Your body needs all three forms of carbohydrates to function properly. Sugar and starches are broken down by the body into glucose (blood sugar) to be used as energy. Fiber is the part of food that is not broken down by the body. Fiber helps you to feel full and can help you stay at a healthy weight. </p>
        </div>
        <br />
        <div>
            <p>Sources: fruits, vegetables, dairy products, cereals, bread, legumes </p>
            <p>References: https://medlineplus.gov/ency/article/002469.htm</p>
        </div>
    </div>
    );
}

export default Carbs;