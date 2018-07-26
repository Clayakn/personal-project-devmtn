const initialState = {
    username: '',
    profilePicture: '',
    userId: 0

}

const UPDATE_USER_INFO = 'UPDATE_USER_INFO'

export default function reducer(state = initialState, action){
    switch(action.type) {
        case UPDATE_USER_INFO:
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