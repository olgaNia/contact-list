import React from 'react';
import ContactItem from "./ContactItem";

const Workmates = (props) => {
    return (
        <div>
            <h2>Workmates</h2>
            {props.workmatesContacts.map(el =>
                <ContactItem key={el.id}
                             contact={el}
                             deleteContact={props.deleteContact}
                             editContact={props.editContact}
                />
            )}
        </div>
    );
};

export default Workmates;