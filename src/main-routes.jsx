import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Contacts } from './contacts/contact-routes';

export const AppRoutes = (props) => {
    return (
        <Switch>
            <Route path="/contacts" component={Contacts} />
        </Switch>
    )
}