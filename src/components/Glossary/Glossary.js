import React from 'react';
import Water from '../Water/Water';
import Carbs from '../Carbs/Carbs';
import Vitamins from '../Vitamins/Vitamins';
import Fats from '../Fats/Fats';
import Minerals from '../Minerals/Minerals';
import Protein from '../Protein/Protein';



const Glossary = () => {
    return (
    <div>
    <h1 style={{textAlign: 'center', paddingTop: '10px'}}> Glossary</h1>
    <Water />
    <Vitamins />
    <Minerals />
    <Carbs />
    <Fats />
    <Protein />
    </div>
    );
}

export default Glossary;