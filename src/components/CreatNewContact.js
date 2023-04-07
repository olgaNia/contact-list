import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

const CreatNewContact = (props) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
   const [status, setStatus] = useState(' ');

   const addContactButtonHandler=()=>{
       const newContact= {
               name: name,
               number,
               status}
       props.addNewContact(newContact)
       setName("")
       setNumber("")
       setStatus("")
   }
    return (
        <div>
            <h2>CreatNewContact</h2>
            <input onChange={(event) => setName(event.target.value)}
                   value={name}
                   type="text"
                   placeholder='Full Name'/>
            <br/>
            <input onChange={event => setNumber(event.target.value)}
                   value={number}
                   type="tel"
                   placeholder='Phone Number'/>
            <br/>
            <label>Choose status:</label>
            <select onChange={event => setStatus(event.target.value)}
                    value={status}>
                <option value=''>Choose</option>
                <option value='Family'>Family</option>
                <option value='Friends'>Friends</option>
                <option value='Workmates'>Workmates</option>
            </select>
            <br/>
            <button onClick={addContactButtonHandler}>Add Contact</button>
        </div>
    );
};

export default CreatNewContact;