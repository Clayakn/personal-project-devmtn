const initialState = {
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
    totalSodium: 0, 
    totalSelenium: 0, 
    totalZinc: 0
}


const ADD_NUTRIENTS = 'ADD_NUTRIENTS'
const SUBTRACT_NUTRIENTS = 'SUBTRACT_NUTRIENTS'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'
const CLEAR_NUTRIENTS = 'CLEAR_NUTRIENTS'

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
                totalVitaminA: (+state.totalVitaminA + +action.payload.vitaminA),
                totalVitaminC: (+state.totalVitaminC + +action.payload.vitaminC),
                totalVitaminD: (+state.totalVitaminD + +action.payload.vitaminD),
                totalVitaminE: (+state.totalVitaminE + +action.payload.vitaminE),
                totalVitaminK: (+state.totalVitaminK + +action.payload.vitaminK),
                totalThiamin: (+state.totalThiamin + +action.payload.thiamin),
                totalRiboflavin: (+state.totalRiboflavin + +action.payload.riboflavin),
                totalNiacin: (+state.totalNiacin + +action.payload.niacin),
                totalVitaminB6: (+state.totalVitaminB6 + +action.payload.vitaminB6),
                totalBiotin: (+state.totalBiotin + +action.payload.biotin),
                totalFolate: (+state.totalFolate + +action.payload.folate),
                totalVitaminB12: (+state.totalVitaminB12 + +action.payload.vitaminB12),
                totalCalcium: (+state.totalCalcium + +action.payload.calcium),
                totalCopper: (+state.totalCopper + +action.payload.copper),
                totalFluoride: (+state.totalFluoride + +action.payload.fluoride),
                totalIodine: (+state.totalIodine + +action.payload.iodine),
                totalIron: (+state.totalIron + +action.payload.iron),
                totalMagnesium: (+state.totalMagnesium + +action.payload.magnesium),
                totalManganese: (+state.totalManganese + +action.payload.manganese),
                totalPhosphorus: (+state.totalPhosphorus + +action.payload.phosphorus),
                totalPotassium: (+state.totalPotassium + +action.payload.potassium),
                totalSodium: (+state.totalSodium + +action.payload.sodium),
                totalSelenium: (+state.totalSelenium + +action.payload.selenium),
                totalZinc: (+state.totalZinc + +action.payload.zinc),
            } 
            return Object.assign({}, state, addPayload)
        case SUBTRACT_NUTRIENTS:
            const subtractPayload = {
                totalFat: (+state.totalFat - +action.payload.fat),
                totalCarbs: (+state.totalCarbs - +action.payload.carbs),
                totalProtein: (+state.totalProtein - +action.payload.protein),
                totalCalories: (+state.totalCalories - +action.payload.calories),
                totalVitaminA: (+state.totalVitaminA - +action.payload.vitaminA),
                totalVitaminC: (+state.totalVitaminC - +action.payload.vitaminC),
                totalVitaminD: (+state.totalVitaminD - +action.payload.vitaminD),
                totalVitaminE: (+state.totalVitaminE - +action.payload.vitaminE),
                totalVitaminK: (+state.totalVitaminK - +action.payload.vitaminK),
                totalThiamin: (+state.totalThiamin - +action.payload.thiamin),
                totalRiboflavin: (+state.totalRiboflavin - +action.payload.riboflavin),
                totalNiacin: (+state.totalNiacin - +action.payload.niacin),
                totalVitaminB6: (+state.totalVitaminB6 - +action.payload.vitaminB6),
                totalBiotin: (+state.totalBiotin - +action.payload.biotin),
                totalFolate: (+state.totalFolate - +action.payload.folate),
                totalVitaminB12: (+state.totalVitaminB12 - +action.payload.vitaminB12),
                totalCalcium: (+state.totalCalcium - +action.payload.calcium),
                totalCopper: (+state.totalCopper - +action.payload.copper),
                totalFluoride: (+state.totalFluoride - +action.payload.fluoride),
                totalIodine: (+state.totalIodine - +action.payload.iodine),
                totalIron: (+state.totalIron - +action.payload.iron),
                totalMagnesium: (+state.totalMagnesium - +action.payload.magnesium),
                totalManganese: (+state.totalManganese - +action.payload.manganese),
                totalPhosphorus: (+state.totalPhosphorus - +action.payload.phosphorus),
                totalPotassium: (+state.totalPotassium - +action.payload.potassium),
                totalSodium: (+state.totalSodium - +action.payload.sodium),
                totalSelenium: (+state.totalSelenium - +action.payload.selenium),
                totalZinc: (+state.totalZinc - +action.payload.zinc),
            }
            return Object.assign({}, state, subtractPayload)
        case CLEAR_NUTRIENTS:
            return Object.assign({}, state, action.payload)
        default: return state
    }
}

export function updateUser(username, profilePicture, userId){
    return {
        type: UPDATE_USER_INFO,
        payload: {
            username, 
            profilePicture,
            userId
        }
    }
}

export function addNutrients(fat, carbs, protein, calories, vitaminA, vitaminC, vitaminD, vitaminE, vitaminK, thiamin, riboflavin, niacin, vitaminB6, biotin, folate, vitaminB12, calcium, copper, fluoride, iodine, iron, magnesium, manganese, phosphorus, potassium, sodium, selenium, zinc){
    return {
        type: ADD_NUTRIENTS,
        payload: {
            fat,
            carbs,
            protein,
            calories,
            vitaminA,
            vitaminC,
            vitaminD,
            vitaminE,
            vitaminK,
            thiamin,
            riboflavin,
            niacin,
            vitaminB6,
            biotin,
            folate,
            vitaminB12,
            calcium,
            copper,
            fluoride,
            iodine,
            iron, 
            magnesium, 
            manganese, 
            phosphorus, 
            potassium, 
            sodium, 
            selenium, 
            zinc
        }
    }
}

export function subtractNutrients(fat, carbs, protein, calories, vitaminA, vitaminC, vitaminD, vitaminE, vitaminK, thiamin, riboflavin, niacin, vitaminB6, biotin, folate, vitaminB12, calcium, copper, fluoride, iodine, iron, magnesium, manganese, phosphorus, potassium, sodium, selenium, zinc){
    return {
        type: SUBTRACT_NUTRIENTS,
        payload: {
            fat,
            carbs,
            protein,
            calories,
            vitaminA,
            vitaminC,
            vitaminD,
            vitaminE,
            vitaminK,
            thiamin,
            riboflavin,
            niacin,
            vitaminB6,
            biotin,
            folate,
            vitaminB12,
            calcium,
            copper,
            fluoride,
            iodine,
            iron, 
            magnesium, 
            manganese, 
            phosphorus, 
            potassium, 
            sodium, 
            selenium, 
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
            totalSodium: 0, 
            totalSelenium: 0, 
            totalZinc: 0
        }
    }
}