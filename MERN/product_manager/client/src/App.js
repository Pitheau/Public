import React from 'react'
import {BrowserRouter, Switch, Route } from"react-router-dom"
import Dashboard from "./views/Dashboard.jsx"
import ShowOne from "./views/ShowOne.jsx"


function App() {
  return (
    <BrowserRouter>
      <div className= "container mt-5">
          <div className= "row  justify-content-center">
              <div className= "col-6
              

              ">
                <h1>Product Manager</h1>
                <Switch>
                    <Route exact path ="/api/products">
                                <Dashboard/>
                      </Route>
                      <Route path = "/api/products/:id">
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
