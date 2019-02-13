import React from 'react'

export const ContactRow = ({contact, DELETE_CONTACT}) =>{
    return(
        <li>
            {contact.name} <button onClick={() =>DELETE_CONTACT(contact.id)}>Remove</button>
        </li>
    );
}