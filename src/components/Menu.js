import React from 'react';
import MenuItem from "./MenuItem";

const Menu = (props) => {
    return (
        <div>
            {/*{props.menu.map((el, index) =>*/}
            {/*    <li key={index}>{el}</li>*/}
            {/*)}*/}

            {props.menu.map((el, index) =>
                <MenuItem
                    key={index}
                    menuItem={el}
                />
            )}
            <hr/>
        </div>
    );
};

export default Menu;