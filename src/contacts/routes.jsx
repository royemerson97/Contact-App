import React from 'react'

import { Switch, Route } from 'react-router-dom'
import { ContactDetailsStyles } from './components/contact-details';
import { ContactList } from './components/contact-list';

export const Contacts = (props) => {
    return (
        <Switch>
            <Route exact path={`${props.match.path}`} render={(props) => (
                <ContactList />
            )} />
            <Route path={`${props.match.path}/:id`} render={(props) => (
                <ContactDetailsStyles />
            )} />
            <Route path='/contacts/add' render={(props) => (
                <ContactDetailsStyles />
            )} />
        </Switch>
    )
}
