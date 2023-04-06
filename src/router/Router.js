import React from 'react';
import {Route, Routes} from "react-router-dom";
import Friends from "../components/contacts/Friends";
import All from "../components/contacts/All";
import Family from "../components/contacts/Family";
import Workmates from "../components/contacts/Workmates";
import Home from "../components/Home";

const Router = () => {
    return (
        <Routes>
            <Route path='/friends' element={<Friends />}/>
            <Route path='/all_contacts' element={<All />}/>
            <Route path='/family' element={<Family />}/>
            <Route path='/workmates' element={<Workmates />}/>
            <Route path='/' element={<Home />}/>

        </Routes>
    );
};

export default Router;