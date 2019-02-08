 const initialState = {
     contacts : []
 };
 export const contactsReducer = (currentState = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return {contacts : [...currentState.contacts, action.contact]}
        default:
            return currentState;
    }
}