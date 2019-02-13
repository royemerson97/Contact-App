import React from 'react'
import { connect } from 'react-redux'
import InjectSheet from 'react-jss'
import {Link} from 'react-router-dom'
import { ContactRow } from './contact-row';
import { bindActionCreators } from 'redux'
import { DELETE_CONTACT } from '../state/contacts.actions';

const styles = (theme) => ({
    text: {
        color: theme.colors.secundary,
    },
});

const List = ({ classes, state, DELETE_CONTACT }) => (
    <div>
        <Link to="/contacts/add">Add contact</Link>
        <ul>
            {state.map(contact => (
                <ContactRow key={contact.id} contact={contact} DELETE_CONTACT={DELETE_CONTACT}/>
            ))}
        </ul>
    </div>
);

const mapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({DELETE_CONTACT}
                            ,dispatch);
}

const StyledContactList = InjectSheet(styles)(List);
export const ContactList = connect(mapStateToProps,mapDispatchToProps)(StyledContactList);