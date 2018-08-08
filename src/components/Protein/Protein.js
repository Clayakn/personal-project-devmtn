import React from 'react';
import proteinPic from '../../images/protein.jpg';


const Protein = () => {
    return (
        <div>
            <div className='nutrients_container'>
                <h1>Protein</h1>
                <div>
                    <img src={proteinPic} alt='Abundance sources of fats such as salmon and avocado on a wooden table to showcase fats'/>
                    <br/>
                    <p>Protein is in every cell in the body. Our bodies need protein from the foods we eat to build and maintain bones, muscles, and skin. Proteins from meat and other animal products are complete proteins. This means they supply all of the amino acids the body can't make on its own. Most plant proteins are incomplete. You should eat different types of plant proteins every day to get all of the amino acids your body needs. It is important to get enough dietary protein. You need to eat protein every day, because your body doesn't store it in the way it stores fats or carbohydrates. How much you need depends on your age, sex, health, and level of physical activity.</p>
                    <br/>
                    <p>SOURCES: meat, dairy products, nuts, certain grains, beans</p>
                    <br/>
                    <p>REFERENCES: medlineplus.gov</p>
                </div>
            </div>
        </div>
    );
}

export default Protein;