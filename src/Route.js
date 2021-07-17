import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import React from 'react'
import Cart from "./pages/Cart";

function route() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/cart">
                        <Header />
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Header />
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default route;