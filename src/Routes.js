import { Switch, Route, Redirect } from "react-router-dom";
import { useState, useEffect } from "react";

import ColorFactory from "./ColorFactory";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

const Routes = () => {
    const INITIAL_STATE = JSON.parse(localStorage.getItem("colors")) || {
        white: "#ffffff",
        black: "#000000",
    };

    const [colors, setColors] = useState(INITIAL_STATE);

    useEffect(() => localStorage.setItem("colors", JSON.stringify(colors)), [
        colors,
    ]);

    const addColor = (colorObj) => {
        setColors((colors) => ({ ...colorObj, ...colors }));
    };

    return (
        <Switch>
            <Route exact path="/colors">
                <ColorFactory colors={colors} />
            </Route>
            <Route exact path="/colors/new">
                <NewColorForm addColor={addColor} />
            </Route>

            <Route exact path="/colors/:color">
                <Color colors={colors} />
            </Route>

            <Redirect to="/colors" />
        </Switch>
    );
};

export default Routes;
