import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Contacts } from './contacts/routes';

export const AppRoutes = (props) => {
    console.log(props.match);
    return (
        <Switch>
            <Route path="/contacts" component={Contacts} />
        </Switch>
    )
}