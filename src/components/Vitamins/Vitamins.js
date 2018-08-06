import React from 'react';
import vitaminsPic from '../../images/vitamins.jpg';

const Vitamins = () => {
    return (
     <div className='vitamins_container'>
    <h1>Vitamins</h1>
    <div>
    <img src={vitaminsPic} alt='Multiple fruits sliced in half laid on a wooden table to showcase vitamins'/>
    <p>Vitamins are a group of substances that are needed for normal cell function, growth, and development. There are 13 essential vitamins. This means that these vitamins are required for the body to work properly.</p>
    </div>
    <br/>
    <h3>Name List</h3>
    <ul>
    <li>Vitamin A, RAE</li>
    <li>Vitamin C, ascorbic acid</li>
    <li>Vitamin D</li>
    <li>Vitamin E (alpha-tocopherol)</li>
    <li>Vitamin K (phylloquinone)</li>
    <li>Vitamin B1 or Thiamin(e)</li>
    <li>Vitamin B2 or Riboflavin</li>
    <li>Vitamin B3 or Niacin</li>
    <li>Vitamin B5 or Panthothenic acid</li>
    <li>Vitamin B6</li>
    <li>Vitamin B7 or Biotin</li>
    <li>Folate (folic acid and B9)</li>
    <li>Vitamin B12 (cyanocobalamin)</li>
    </ul>
    <br/>
    <h3>Vitamin A</h3>
    <p>BENEFITS & KEYWORDS: Good vision, healthy immune system, growth and development</p>
    <br/>
    <h3>Vitamin C</h3>
    <p>BENEFITS & KEYWORDS: Promotes wound healing, helps absorb iron, antioxidant</p>
    <br/>
    <h3>Vitamin D</h3>
    <p>BENEFITS & KEYWORDS: Sunshine vitamin, helps absorb calcium, promotes bone growth</p>
    <br/>
    <h3>Vitamin E</h3>
    <p>BENEFITS & KEYWORDS: antioxidant, healthy immune system, repair damaged cells </p>
    <br/>
    <h3>Vitamin K</h3>
    <p>BENEFITS & KEYWORDS: Helps blood clot, prevents coagulation(sticking together) of blood</p>
    <br/>
    <h3>Thiamin</h3>
    <p>BENEFITS & KEYWORDS: Converts carbs into energy, essential for heart function, healthy nerve cells.</p>
    <br/>
    <h3>Riboflavin</h3>
    <p>BENEFITS & KEYWORDS: 1 of 8 B-complex vitamins, maintains energy production, promotes eye health</p>
    <br/>
    <h3>Niacin</h3>
    <p>BENEFITS & KEYWORDS: Balances blood cholesterol levels, turns food into energy, niacin flush</p>
    <br/>
    <h3>Panthothenic acid</h3>
    <p>BENEFITS & KEYWORDS: Metabolism of food, involved in production of hormones and cholesterol</p>
    <br/>
    <h3>Vitamin B6</h3>
    <p>BENEFITS & KEYWORDS: Pyridoxine, helps form red blood cells,  maintains brain function</p>
    <br/>
    <h3>Biotin</h3>
    <p>BENEFITS & KEYWORDS: Energy production (metabolism of proteins and carbohydrates) </p>
    <br/>
    <h3>Folate</h3>
    <p>BENEFITS & KEYWORDS: Helps in red blood cell formation, needed for the production of DNA</p>
    <br/>
    <h3>Vitamin B12</h3>
    <p>BENEFITS & KEYWORDS: Helps in red blood cell formation, maintain central nervous system, needed for the production of DNA</p>
    <br/>
    <p>References from Medlineplus.gov</p>
    </div>
    );
}

export default Vitamins;