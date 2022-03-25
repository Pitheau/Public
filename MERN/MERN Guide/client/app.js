//dependencies
import React from 'react'
import {BrowserRouter, Switch, Route } from"react-router-dom"
import Edit from './Components/Edit';
import Dashboard from "./views/Dashboard"
import ShowOne from "./views/ShowOne"


// BrowserRouter set up goes inside the return statement with Bootstrap container
<BrowserRouter>
    <div className= "container mt-5">
        <div className= "row justify-content-center">
            <div className= "col-8">
                <Switch>
                    // route without params need to import the 
                    <Route exact path ="/api/products">
                        <Dashboard/>
                    </Route>
                    // route to create
                    <Route exact path ="/api/products/new">
                        <Create/>
                    </Route>
                    // route with params for edit
                    <Route exact path ="/api/products/edit/:id">
                            <Edit/>
                    </Route>
                    // route with params for showone
                    <Route exact path ="/api/products/showOne/:id">
                            <ShowOne/>
                    </Route>
                </Switch>
            </div>
        </div>
    </div>
</BrowserRouter>

//workflow; test that app.js is working through the browser