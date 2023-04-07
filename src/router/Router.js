import React from 'react';
import {Route, Routes} from "react-router-dom";
import Friends from "../components/contacts/Friends";
import All from "../components/contacts/All";
import Family from "../components/contacts/Family";
import Workmates from "../components/contacts/Workmates";
import CreatNewContact from "../components/CreatNewContact";

const Router = (props) => {
    return (
        <Routes>
            <Route path='/friends'
                   element={
                       <Friends
                           friendsContacts={props.contacts.filter
                           (el => el.status === 'Friends')}
                           deleteContact={props.deleteContact}
                           editContact={props.editContact}
                       />
                   }
            />
            <Route path='/all_contacts'
                   element={
                       <All
                           allContacts={props.contacts}
                           deleteContact={props.deleteContact}
                           editContact={props.editContact}
                       />
                   }
                  />
            <Route path='/family'
                   element={
                       <Family
                           familyContacts={props.contacts.filter(el =>
                               el.status === 'Family')}
                           deleteContact={props.deleteContact}
                           editContact={props.editContact}
                       />
                   }
                   />
            <Route path='/workmates'
                   element={
                       <Workmates
                           workmatesContacts={props.contacts.filter(el =>
                               el.status === 'Workmates')}
                           deleteContact={props.deleteContact}
                           editContact={props.editContact}
                       />
                   }
            />
            <Route path='/' element={
                <CreatNewContact
                    addNewContact={props.addNewContact}/>
            }
            />
        </Routes>
    );
};

export default Router;