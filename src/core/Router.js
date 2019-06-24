import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Builder from '../components/Builder';
import View from '../components/View';

export default function () {
    return (
        <Switch>
            <Route path="/" exact component={Builder} />
            <Route path="/view" component={View} />
        </Switch>
    );
}
