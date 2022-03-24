import React from 'react'
import {BrowserRouter, Switch, Route } from"react-router-dom"
import Edit from './Components/Edit';
import Main from "./views/Main"
import ShowOne from "./views/ShowOne"


function App() {
  return (
    <BrowserRouter>
      <div className= "container mt-5">
          <div className= "row  justify-content-center">
              <div className= "col-6">
                <Switch>
                    <Route exact path ="/api/products">
                                <Main/>
                      </Route>
                      <Route exact path ="/api/products/update/:id">
                                <Edit/>
                      </Route>
                      <Route exact path ="/api/products/update/:id">
                                <ShowOne/>
                      </Route>
                </Switch>
              </div>
          </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
