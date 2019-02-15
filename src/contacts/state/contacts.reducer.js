 const initialState = {
     contacts : []
 };
 export const contactsReducer = (currentState = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...currentState, action.payload]
        case 'DELETE_CONTACT':
            return currentState.filter(contact => contact.id !== action.payload);
        case 'UPDATE_CONTACT':
            return currentState.find(contact=>
                contact.id === action.payload.id ? {...contact, name : action.payload.name} : contact
            );
        default:
            return currentState;
    }
}