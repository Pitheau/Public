import React from 'react'
import {BrowserRouter, Switch, Route } from"react-router-dom"
import Edit from './Views/Edit';
import Dashboard from "./Views/Dashboard"
import Create from './Views/Create';

function App() {
  return (
    <BrowserRouter>
    <div className= "container mt-5">
        <div className= "row justify-content-center">
            <div className= "col-8">
                <Switch>
                    <Route exact path ="/api/author">
                        <Dashboard/>
                    </Route>
                    <Route exact path ="/api/author/new">
                        <Create/>
                    </Route>
                    <Route exact path ="/api/author/edit/:id">
                            <Edit/>
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
</BrowserRouter>
  );
}

export default App;
