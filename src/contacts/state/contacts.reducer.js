 const initialState = {
     contacts : []
 };
 export const contactsReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...currentState, action.payload]
        case 'DELETE_CONTACT':
            const contacts = currentState.filter(contact => contact.id !== action.payload);
            return contacts;
        default:
            return currentState;
    }
}