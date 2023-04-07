import React from 'react';
import ContactItem from "./ContactItem";

const All = (props) => {

    return (
        <div>
            <h2>All</h2>
            {props.allContacts.map(el =>
                <ContactItem  key={el.id}
                              contact={el}
                              deleteContact={props.deleteContact}
                              editContact={props.editContact}
                />
            )}
        </div>
    );
};

export default All;