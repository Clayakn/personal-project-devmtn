import React from 'react';
import vitaminsPic from '../../images/vitamins.jpg';

const Vitamins = () => {
    return (
     <div className='nutrients_container'>
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
    <p>BENEFITS & KEYWORDS: growth and development, immune function, reproduction, red blood cell formation, skin and bone formation, vision</p>
    <br/>
    <h3>Vitamin C</h3>
    <p>BENEFITS & KEYWORDS: antioxidant, collagen and connective tissue formation, immune function, wound healing</p>
    <br/>
    <h3>Vitamin D</h3>
    <p>BENEFITS & KEYWORDS: Sunshine vitamin, blood pressure regulation, bone growth, calcium balance, hormone production, immune function, nervous system function</p>
    <br/>
    <h3>Vitamin E</h3>
    <p>BENEFITS & KEYWORDS: antioxidant, formation of blood vessels, immune function</p>
    <br/>
    <h3>Vitamin K</h3>
    <p>BENEFITS & KEYWORDS: blood clotting, strong bones</p>
    <br/>
    <h3>Thiamin</h3>
    <p>BENEFITS & KEYWORDS: 1 of 8 B-complex vitamins, conversion of food into energy, nervous system function</p>
    <br/>
    <h3>Riboflavin</h3>
    <p>BENEFITS & KEYWORDS: conversion of food into energy, growth and development, red blood cell formation</p>
    <br/>
    <h3>Niacin</h3>
    <p>BENEFITS & KEYWORDS: cholesterol production, conversion of food into energy, digestion, nervous system function, niacin flush</p>
    <br/>
    <h3>Panthothenic acid</h3>
    <p>BENEFITS & KEYWORDS: converstion of food into energy, fat metabolism, hormone production, nervous system function, red blood cell formation</p>
    <br/>
    <h3>Vitamin B6</h3>
    <p>BENEFITS & KEYWORDS: Pyridoxine, immune function, nervous system function, (protein, carbohydrate, and fat metabolism), red blood cell formation</p>
    <br/>
    <h3>Biotin</h3>
    <p>BENEFITS & KEYWORDS: energy storage, (protein, carbohydrate, and fat metabolism) </p>
    <br/>
    <h3>Folate</h3>
    <p>BENEFITS & KEYWORDS: prevention of birth defects, protein metabolism, red blood cell formation</p>
    <br/>
    <h3>Vitamin B12</h3>
    <p>BENEFITS & KEYWORDS: conversion of food into energy, nervous system function, red blood cell formation</p>
    <br/>
    <p>References: nutrition.gov</p>
    </div>
    );
}

export default Vitamins;