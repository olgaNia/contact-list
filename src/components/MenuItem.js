import React from 'react';

const MenuItem = (props) => {
    console.log(props)
    return (
        <div>
            {props.menuItem}
        </div>
    );
};

export default MenuItem;