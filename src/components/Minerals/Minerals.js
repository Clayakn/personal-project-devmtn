import React from 'react';
import mineralsPic from '../../images/minerals.jpg';


const Minerals = () => {
    return (
        <div className='nutrients_container'>
        <h1>Minerals</h1>
        <div>
        <img src={mineralsPic} alt='Diary and fish items laid on a wooden table to showcase minerals'/>
        <p>Minerals are important for your body to stay healthy. Your body uses minerals for many different jobs, including keeping your bones, muscles, heart, and brain working properly. Minerals are also important for making enzymes and hormones.</p>
        </div>
        <br/>
        <h3>Name List</h3>
        <ul>
        <li>Calcium, Ca</li>
        <li>Copper, Cu</li>
        <li>Fluoride, F</li>
        <li>Iodine, I</li>
        <li>Iron, Fe</li>
        <li>Magnesium, Mg</li>
        <li>Manganese, Mn</li>
        <li>Phosphorus, P</li>
        <li>Potassium, K</li>
        <li>Selenium, Se</li>
        <li>Sodium, Na</li>
        <li>Zinc, Zn</li>
        </ul>
        <br/>
        <h3>Calcium</h3>
        <p>BENEFITS & KEYWORDS: blood clotting, bone and teeth formation, constriction and relaxation of blood vessels, hormone secretion, muscle contraction, nervous system function</p>
        <br/>
        <h3>Copper</h3>
        <p>BENEFITS & KEYWORDS: antioxidant, bone formation, collagen and connective tissue formation, energy production, iron metabolism, nervous system function</p>
        <br/>
        <h3>Fluoride</h3>
        <p>BENEFITS & KEYWORDS: decreases incidence of tooth cavities, builds and maintains heathy bones, strengthens bones and helps prevent bone fractures 
        Source: http://www.healthsupplementsnutritionalguide.com/fluoride/</p>
        <br/>
        <h3>Iodine</h3>
        <p>BENEFITS & KEYWORDS: growth and development, metabolism, reproduction, thyroid hormone production </p>
        <br/>
        <h3>Iron</h3>
        <p>BENEFITS & KEYWORDS: energy production, growth and development, immune function, red blood cell formation, reproduction, wound healing</p>
        <br/>
        <h3>Magnesium</h3>
        <p>BENEFITS & KEYWORDS: blood pressure regulation, blood sugar regulation, bone formation, energy production, hormone secretion, hormone secretion, immune function, muscle contraction, nervous system function, normal heart rhythm, protein formation</p>
        <br/>
        <h3>Manganese</h3>
        <p>BENEFITS & KEYWORDS: (carbohydrate, protein, and cholesterol metabolism), cartilage and bone formation, wound healing</p>
        <br/>
        <h3>Phosphorus</h3>
        <p>BENEFITS & KEYWORDS: acid-base balance, bone formation, energy production and storage, hormone activation</p>
        <br/>
        <h3>Potassium</h3>
        <p>BENEFITS & KEYWORDS: blood pressure regulation, carbohydrate metabolism, fluid balance, growth and development, heart function, muscle contraction, nervous system function, protein formation</p>
        <br/>
        <h3>Selenium</h3>
        <p>BENEFITS & KEYWORDS: antioxidant, immune function, reproduction, thyroid function</p>
        <br/>
        <h3>Sodium</h3>
        <p>BENEFITS & KEYWORDS: acid-base balance, blood pressure regulation, fluid balance, muscle contraction, nervous system function </p>
        <br/>
        <h3>Zinc</h3>
        <p>BENEFITS & KEYWORDS: growth and development, immune function, nervous system function, protein formation, reproduction, taste and smell, wound healing</p>
        <br/>
        <p>References: nutrition.gov</p>
        </div>
    );
}

export default Minerals;