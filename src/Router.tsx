import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "components/Homepage/Home";
import SignUp from "components/SignUp/SignUp";

const Router = (): JSX.Element => {
    return (
        <Routes>
            <Route path= "/sign-up" element = {<SignUp />}> </Route>
            <Route path= "/" element = {<Home />}> </Route>
        </Routes>
    )
};
export default Router;
