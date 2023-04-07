import React from 'react';
import ContactItem from "./ContactItem";

const Family = (props) => {
    return (
        <div>
            <h2>Family</h2>
            {props.familyContacts.map(el =>
                <ContactItem key={el.id}
                             contact={el}
                             deleteContact={props.deleteContact}
                             editContact={props.editContact}
                />
            )}
        </div>
    );
};

export default Family;