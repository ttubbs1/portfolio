import React from "react";
import { Route, Switch } from "react-router-dom";
import WeaponWheel from "./weapon wheel/WeaponWheel";
import Home from "./Home";
import "./Styles.css";

const App = () => {
    return (
        <Switch>
            <Route exact path="/">
                <nav className="navbarWrapper">
                    <div className="bar" />
                    <div className="weaponWheelWrapper">
                        <WeaponWheel />
                    </div>
                </nav>
                <Home />
            </Route>
        </Switch>
    );
};

export default App;
