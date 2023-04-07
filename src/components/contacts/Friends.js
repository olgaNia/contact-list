import React from 'react';
import ContactItem from "./ContactItem";

const Friends = (props) => {
    return (
        <div>
            <h2>Friends</h2>
            {props.friendsContacts.map(el =>
                <ContactItem key={el.id}
                             contact={el}
                             deleteContact={props.deleteContact}
                             editContact={props.editContact}
                />
            )}
        </div>
    );
};

export default Friends;