import React from 'react';

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.contactListName}</h1>
            <p>Hello {props.userName}!</p>
            <hr/>
        </div>
    );
};

export default Header;