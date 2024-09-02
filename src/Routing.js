import React from "react";
import { Routes, Route, useLocation as location } from "react-router-dom";

import Parts from "./Pages/Parts"

function Routing () {
    const use = location();
    console.log(use.currentPath())
    return (
        <Routes>
            <Route path="/parts" component={ <Parts /> }/>
        </Routes>
    )
}

export default Routing;