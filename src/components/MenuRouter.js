import React from 'react';
import {Link} from "react-router-dom";
import Router from "../router/Router";

const flexBox = {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '100%',
    margin: '30px'
}

const flexChild = {
    width: '100px',
}
const MenuRouter = () => {
    return (
        <div>
        <div style={flexBox}>

            <div style={flexChild}>
                <Link to={'/all_contacts'}>All</Link>
            </div>

            <div style={flexChild}>
                <Link to={'/family'}>Family</Link>
            </div>

            <div style={flexChild}>
                <Link to={'/friends'}>Friends</Link>
            </div>

            <div style={flexChild}>
                <Link to={'/workmates'}>Workmates </Link>
            </div>

            <div style={flexChild}>
                <Link to={'/'}>Home </Link>
            </div>
        </div>

<Router />

        </div>
    );
};

export default MenuRouter;