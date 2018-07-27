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
    Flouride: 0,
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


const UPDATE_NUTRIENTS = 'UPDATE_NUTRIENTS'
const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export default function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_USER_INFO:
            return Object.assign({}, state, action.payload)
        case UPDATE_NUTRIENTS:
            const newPayload = {Fat: +state.Fat + +action.payload.Fat}
            return Object.assign({}, state, newPayload)
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

export function updateNutrients(Fat){
    return {
        type: UPDATE_NUTRIENTS,
        payload: {
            Fat,
        }
    }
}