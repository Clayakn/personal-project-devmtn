const initialState = {
    username: '',
    profilePicture: '',
    userId: 0,
    Fat: 0, 
    Carbs: 0,
    Protein: 0,
    Calories: 0, 
    VitaminA: 0,
    VitaminC: 0,
    VitaminD: 0, 
    VitaminE: 0, 
    VitaminK: 0, 
    Thiamin: 0, 
    Riboflavin: 0, 
    Niacin: 0,
    VitaminB6: 0,
    Biotin: 0, 
    Folate: 0, 
    VitaminB12: 0, 
    Calcium: 0, 
    Copper: 0, 
    Fluoride: 0,
    Iodine: 0, 
    Iron: 0, 
    Magnesium: 0, 
    Manganese: 0, 
    Phosphorus: 0, 
    Potassium: 0, 
    Sodium: 0, 
    Selenium: 0, 
    Zinc: 0
}


const ADD_NUTRIENTS = 'ADD_NUTRIENTS'
const SUBTRACT_NUTRIENTS = 'SUBTRACT_NUTRIENTS'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export default function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_USER_INFO:
            return Object.assign({}, state, action.payload)
        case ADD_NUTRIENTS:
            const addPayload = {
                Fat: (+state.Fat + +action.payload.Fat).toFixed(2),
                Carbs: (+state.Carbs + +action.payload.Carbs).toFixed(2),
                Protein: (+state.Protein + +action.payload.Protein).toFixed(2),
                Calories: (+state.Calories + +action.payload.Calories).toFixed(2),
                VitaminA: (+state.VitaminA + +action.payload.VitaminA).toFixed(2),
                VitaminC: (+state.VitaminC + +action.payload.VitaminC).toFixed(2),
                VitaminD: (+state.VitaminD + +action.payload.VitaminD).toFixed(2),
                VitaminE: (+state.VitaminE + +action.payload.VitaminE).toFixed(2),
                VitaminK: (+state.VitaminK + +action.payload.VitaminK).toFixed(2),
                Thiamin: (+state.Thiamin + +action.payload.Thiamin).toFixed(2),
                Riboflavin: (+state.Riboflavin + +action.payload.Riboflavin).toFixed(2),
                Niacin: (+state.Niacin + +action.payload.Niacin).toFixed(2),
                VitaminB6: (+state.VitaminB6 + +action.payload.VitaminB6).toFixed(2),
                Biotin: (+state.Biotin + +action.payload.Biotin).toFixed(2),
                Folate: (+state.Folate + +action.payload.Folate).toFixed(2),
                VitaminB12: (+state.VitaminB12 + +action.payload.VitaminB12).toFixed(2),
                Calcium: (+state.Calcium + +action.payload.Calcium).toFixed(2),
                Copper: (+state.Copper + +action.payload.Copper).toFixed(2),
                Fluoride: (+state.Fluoride + +action.payload.Fluoride).toFixed(2),
                Iodine: (+state.Iodine + +action.payload.Iodine).toFixed(2),
                Iron: (+state.Iron + +action.payload.Iron).toFixed(2),
                Magnesium: (+state.Magnesium + +action.payload.Magnesium).toFixed(2),
                Manganese: (+state.Manganese + +action.payload.Manganese).toFixed(2),
                Phosphorus: (+state.Phosphorus + +action.payload.Phosphorus).toFixed(2),
                Potassium: (+state.Potassium + +action.payload.Potassium).toFixed(2),
                Sodium: (+state.Sodium + +action.payload.Sodium).toFixed(2),
                Selenium: (+state.Selenium + +action.payload.Selenium).toFixed(2),
                Zinc: (+state.Zinc + +action.payload.Zinc).toFixed(2),
            } 
            return Object.assign({}, state, addPayload)
        case SUBTRACT_NUTRIENTS:
            const subtractPayload = {
                Fat: (+state.Fat - +action.payload.Fat).toFixed(2),
                Carbs: (+state.Carbs - +action.payload.Carbs).toFixed(2),
                Protein: (+state.Protein - +action.payload.Protein).toFixed(2),
                Calories: (+state.Calories - +action.payload.Calories).toFixed(2),
                VitaminA: (+state.VitaminA - +action.payload.VitaminA).toFixed(2),
                VitaminC: (+state.VitaminC - +action.payload.VitaminC).toFixed(2),
                VitaminD: (+state.VitaminD - +action.payload.VitaminD).toFixed(2),
                VitaminE: (+state.VitaminE - +action.payload.VitaminE).toFixed(2),
                VitaminK: (+state.VitaminK - +action.payload.VitaminK).toFixed(2),
                Thiamin: (+state.Thiamin - +action.payload.Thiamin).toFixed(2),
                Riboflavin: (+state.Riboflavin - +action.payload.Riboflavin).toFixed(2),
                Niacin: (+state.Niacin - +action.payload.Niacin).toFixed(2),
                VitaminB6: (+state.VitaminB6 - +action.payload.VitaminB6).toFixed(2),
                Biotin: (+state.Biotin - +action.payload.Biotin).toFixed(2),
                Folate: (+state.Folate - +action.payload.Folate).toFixed(2),
                VitaminB12: (+state.VitaminB12 - +action.payload.VitaminB12).toFixed(2),
                Calcium: (+state.Calcium - +action.payload.Calcium).toFixed(2),
                Copper: (+state.Copper - +action.payload.Copper).toFixed(2),
                Fluoride: (+state.Fluoride - +action.payload.Fluoride).toFixed(2),
                Iodine: (+state.Iodine - +action.payload.Iodine).toFixed(2),
                Iron: (+state.Iron - +action.payload.Iron).toFixed(2),
                Magnesium: (+state.Magnesium - +action.payload.Magnesium).toFixed(2),
                Manganese: (+state.Manganese - +action.payload.Manganese).toFixed(2),
                Phosphorus: (+state.Phosphorus - +action.payload.Phosphorus).toFixed(2),
                Potassium: (+state.Potassium - +action.payload.Potassium).toFixed(2),
                Sodium: (+state.Sodium - +action.payload.Sodium).toFixed(2),
                Selenium: (+state.Selenium - +action.payload.Selenium).toFixed(2),
                Zinc: (+state.Zinc - +action.payload.Zinc).toFixed(2),
            }
            return Object.assign({}, state, subtractPayload)
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

export function addNutrients(Fat, Carbs, Protein, Calories, VitaminA, VitaminC, VitaminD, VitaminE, VitaminK, Thiamin, Riboflavin, Niacin, VitaminB6, Biotin, Folate, VitaminB12, Calcium, Copper, Fluoride, Iodine, Iron, Magnesium, Manganese, Phosphorus, Potassium, Sodium, Selenium, Zinc){
    return {
        type: ADD_NUTRIENTS,
        payload: {
            Fat,
            Carbs,
            Protein,
            Calories,
            VitaminA,
            VitaminC,
            VitaminD,
            VitaminE,
            VitaminK,
            Thiamin,
            Riboflavin,
            Niacin,
            VitaminB6,
            Biotin,
            Folate,
            VitaminB12,
            Calcium,
            Copper,
            Fluoride,
            Iodine,
            Iron, 
            Magnesium, 
            Manganese, 
            Phosphorus, 
            Potassium, 
            Sodium, 
            Selenium, 
            Zinc
        }
    }
}

export function subtractNutrients(Fat, Carbs, Protein, Calories, VitaminA, VitaminC, VitaminD, VitaminE, VitaminK, Thiamin, Riboflavin, Niacin, VitaminB6, Biotin, Folate, VitaminB12, Calcium, Copper, Fluoride, Iodine, Iron, Magnesium, Manganese, Phosphorus, Potassium, Sodium, Selenium, Zinc){
    return {
        type: SUBTRACT_NUTRIENTS,
        payload: {
            Fat,
            Carbs,
            Protein,
            Calories,
            VitaminA,
            VitaminC,
            VitaminD,
            VitaminE,
            VitaminK,
            Thiamin,
            Riboflavin,
            Niacin,
            VitaminB6,
            Biotin,
            Folate,
            VitaminB12,
            Calcium,
            Copper,
            Fluoride,
            Iodine,
            Iron, 
            Magnesium, 
            Manganese, 
            Phosphorus, 
            Potassium, 
            Sodium, 
            Selenium, 
            Zinc
        }
    }
}