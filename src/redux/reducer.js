const initialState = {
    user: '',
    totalFat: 0, 
    totalCarbs: 0,
    totalProtein: 0,
    totalCalories: 0, 
    totalVitaminA: 0,
    totalVitaminC: 0,
    totalVitaminD: 0, 
    totalVitaminE: 0, 
    totalVitaminK: 0, 
    totalThiamin: 0, 
    totalRiboflavin: 0, 
    totalNiacin: 0,
    totalVitaminB6: 0,
    totalBiotin: 0, 
    totalFolate: 0, 
    totalVitaminB12: 0, 
    totalCalcium: 0, 
    totalCopper: 0, 
    totalFluoride: 0,
    totalIodine: 0, 
    totalIron: 0, 
    totalMagnesium: 0, 
    totalManganese: 0, 
    totalPhosphorus: 0, 
    totalPotassium: 0, 
    totalSelenium: 0, 
    totalSodium: 0, 
    totalZinc: 0,
    mealplanId: ''
}


const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
const ADD_NUTRIENTS = 'ADD_NUTRIENTS';
const SUBTRACT_NUTRIENTS = 'SUBTRACT_NUTRIENTS';
const CLEAR_NUTRIENTS = 'CLEAR_NUTRIENTS';
const UPDATE_MEALPLAN_ID = 'UPDATE_MEALPLAN_ID';

export default function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_USER_INFO:
            return Object.assign({}, state, action.payload)
        case ADD_NUTRIENTS:
            const addPayload = {
                totalFat: (+state.totalFat + +action.payload.fat),
                totalCarbs: (+state.totalCarbs + +action.payload.carbs),
                totalProtein: (+state.totalProtein + +action.payload.protein),
                totalCalories: (+state.totalCalories + +action.payload.calories),
                totalVitaminA: (+state.totalVitaminA + +action.payload.vitamina),
                totalVitaminC: (+state.totalVitaminC + +action.payload.vitaminc),
                totalVitaminD: (+state.totalVitaminD + +action.payload.vitamine),
                totalVitaminE: (+state.totalVitaminE + +action.payload.vitamine),
                totalVitaminK: (+state.totalVitaminK + +action.payload.vitamink),
                totalThiamin: (+state.totalThiamin + +action.payload.thiamin),
                totalRiboflavin: (+state.totalRiboflavin + +action.payload.riboflavin),
                totalNiacin: (+state.totalNiacin + +action.payload.niacin),
                totalVitaminB6: (+state.totalVitaminB6 + +action.payload.vitaminb6),
                totalBiotin: (+state.totalBiotin + +action.payload.biotin),
                totalFolate: (+state.totalFolate + +action.payload.folate),
                totalVitaminB12: (+state.totalVitaminB12 + +action.payload.vitaminb12),
                totalCalcium: (+state.totalCalcium + +action.payload.calcium),
                totalCopper: (+state.totalCopper + +action.payload.copper),
                totalFluoride: (+state.totalFluoride + +action.payload.fluoride),
                totalIodine: (+state.totalIodine + +action.payload.iodine),
                totalIron: (+state.totalIron + +action.payload.iron),
                totalMagnesium: (+state.totalMagnesium + +action.payload.magnesium),
                totalManganese: (+state.totalManganese + +action.payload.manganese),
                totalPhosphorus: (+state.totalPhosphorus + +action.payload.phosphorus),
                totalPotassium: (+state.totalPotassium + +action.payload.potassium),
                totalSelenium: (+state.totalSelenium + +action.payload.selenium),
                totalSodium: (+state.totalSodium + +action.payload.sodium),
                totalZinc: (+state.totalZinc + +action.payload.zinc),
            } 
            return Object.assign({}, state, addPayload)
        case SUBTRACT_NUTRIENTS:
            const subtractPayload = {
                totalFat: (+state.totalFat - +action.payload.fat),
                totalCarbs: (+state.totalCarbs - +action.payload.carbs),
                totalProtein: (+state.totalProtein - +action.payload.protein),
                totalCalories: (+state.totalCalories - +action.payload.calories),
                totalVitaminA: (+state.totalVitaminA - +action.payload.vitamina),
                totalVitaminC: (+state.totalVitaminC - +action.payload.vitaminc),
                totalVitaminD: (+state.totalVitaminD - +action.payload.vitamind),
                totalVitaminE: (+state.totalVitaminE - +action.payload.vitamine),
                totalVitaminK: (+state.totalVitaminK - +action.payload.vitamink),
                totalThiamin: (+state.totalThiamin - +action.payload.thiamin),
                totalRiboflavin: (+state.totalRiboflavin - +action.payload.riboflavin),
                totalNiacin: (+state.totalNiacin - +action.payload.niacin),
                totalVitaminB6: (+state.totalVitaminB6 - +action.payload.vitaminb6),
                totalBiotin: (+state.totalBiotin - +action.payload.biotin),
                totalFolate: (+state.totalFolate - +action.payload.folate),
                totalVitaminB12: (+state.totalVitaminB12 - +action.payload.vitaminb12),
                totalCalcium: (+state.totalCalcium - +action.payload.calcium),
                totalCopper: (+state.totalCopper - +action.payload.copper),
                totalFluoride: (+state.totalFluoride - +action.payload.fluoride),
                totalIodine: (+state.totalIodine - +action.payload.iodine),
                totalIron: (+state.totalIron - +action.payload.iron),
                totalMagnesium: (+state.totalMagnesium - +action.payload.magnesium),
                totalManganese: (+state.totalManganese - +action.payload.manganese),
                totalPhosphorus: (+state.totalPhosphorus - +action.payload.phosphorus),
                totalPotassium: (+state.totalPotassium - +action.payload.potassium),
                totalSelenium: (+state.totalSelenium - +action.payload.selenium),
                totalSodium: (+state.totalSodium - +action.payload.sodium),
                totalZinc: (+state.totalZinc - +action.payload.zinc),
            }
            return Object.assign({}, state, subtractPayload)
        case CLEAR_NUTRIENTS:
            return Object.assign({}, state, action.payload)
        case UPDATE_MEALPLAN_ID:
            return Object.assign({}, state, action.payload)
        default: return state
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER_INFO,
        payload: {
            user
        }
    }
}

export function addNutrients(fat, carbs, protein, calories, vitamina, vitaminc, vitamind, vitamine, vitamink, thiamin, riboflavin, niacin, vitaminb6, biotin, folate, vitaminb12, calcium, copper, fluoride, iodine, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc){
    return {
        type: ADD_NUTRIENTS,
        payload: {
            fat,
            carbs,
            protein,
            calories,
            vitamina,
            vitaminc,
            vitamind,
            vitamine,
            vitamink,
            thiamin,
            riboflavin,
            niacin,
            vitaminb6,
            biotin,
            folate,
            vitaminb12,
            calcium,
            copper,
            fluoride,
            iodine,
            iron, 
            magnesium, 
            manganese, 
            phosphorus, 
            potassium, 
            selenium, 
            sodium, 
            zinc
        }
    }
}

export function subtractNutrients(fat, carbs, protein, calories, vitamina, vitaminc, vitamind, vitamine, vitamink, thiamin, riboflavin, niacin, vitaminb6, biotin, folate, vitaminb12, calcium, copper, fluoride, iodine, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc){
    return {
        type: SUBTRACT_NUTRIENTS,
        payload: {
            fat,
            carbs,
            protein,
            calories,
            vitamina,
            vitaminc,
            vitamind,
            vitamine,
            vitamink,
            thiamin,
            riboflavin,
            niacin,
            vitaminb6,
            biotin,
            folate,
            vitaminb12,
            calcium,
            copper,
            fluoride,
            iodine,
            iron, 
            magnesium, 
            manganese, 
            phosphorus, 
            potassium, 
            selenium, 
            sodium, 
            zinc
        }
    }
}

export function clearNutrients(){
    return {
        type: CLEAR_NUTRIENTS,
        payload: {
            totalFat: 0,
            totalCarbs: 0,
            totalProtein: 0,
            totalCalories: 0,
            totalVitaminA: 0,
            totalVitaminC: 0,
            totalVitaminD: 0,
            totalVitaminE: 0,
            totalVitaminK: 0,
            totalThiamin: 0,
            totalRiboflavin: 0,
            totalNiacin: 0,
            totalVitaminB6: 0,
            totalBiotin: 0,
            totalFolate: 0,
            totalVitaminB12: 0,
            totalCalcium: 0,
            totalCopper: 0,
            totalFluoride: 0,
            totalIodine: 0,
            totalIron: 0, 
            totalMagnesium: 0, 
            totalManganese: 0, 
            totalPhosphorus: 0, 
            totalPotassium: 0, 
            totalSelenium: 0, 
            totalSodium: 0, 
            totalZinc: 0
        }
    }
}

export function updateMealplanId(mealplanId) {
    return {
        type: UPDATE_MEALPLAN_ID,
        payload: {
            mealplanId
        }
    }
}