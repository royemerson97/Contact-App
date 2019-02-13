import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ContactsDetails } from './components/contact-details';
import { ContactList } from './components/contact-list';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import { contactsReducer } from './state/contacts.reducer';

const STORE = createStore(contactsReducer,applyMiddleware(logger));

export const Contacts = (props) => {
    return (
        <Provider store={STORE}>
            <Switch>
                <Route exact path={`${props.match.path}`} render={(props) => (
                    <ContactList {...props} />
                )} />
                <Route path={`${props.match.path}/add`} render={(props) => (
                    <ContactsDetails {...props} />
                )} />
            </Switch>
        </Provider>
    )
}
