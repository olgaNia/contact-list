import './App.css';
import Header from "./components/Header";
import MenuRouter from "./components/MenuRouter";
import {v4 as uuidv4} from 'uuid';
import Router from "./router/Router";
import {useState} from "react";


function App() {
    const contactListName = 'Contact List';
    const user = 'Alice';

    const menu = ['All', 'Family', 'Friends', 'Workmates']

    const [contacts, setContacts] = useState([
        {
            id: uuidv4(),
            name: 'Bill',
            number: '+1 470 457 3456',
            status: 'Friends',
        },
        {
            id: uuidv4(),
            name: 'Anna',
            number: '+1 345 567 34567',
            status: 'Workmates',
        },
        {
            id: uuidv4(),
            name: 'Jack',
            number: '+1 234 567 7890',
            status: 'Family',
        },
        {
            id: uuidv4(),
            name: 'Russel',
            number: '+1 212 313 3456',
            status: 'Workmates',
        },
        {
            id: uuidv4(),
            name: 'Amanda',
            number: '+1 343 123 4568',
            status: 'Friends',
        },
        {
            id: uuidv4(),
            name: 'Matthew',
            number: '+1 310 345 7890',
            status: 'Friends',
        },
        {
            id: uuidv4(),
            name: 'Liza',
            number: '+1 703 567 8902',
            status: 'Workmates',
        },
        {
            id: uuidv4(),
            name: 'Nathan',
            number: '+1 325 111 1234',
            status: 'Family',
        },
        {
            id: uuidv4(),
            name: 'Nataly',
            number: '+1 469 098 7654',
            status: 'Friends',
        },
        {
            id: uuidv4(),
            name: 'John',
            number: '+1 949 123 4567',
            status: 'Family',
        },
    ])
    const addNewContact = (newContact) => {
        setContacts([...contacts, {...newContact, id: uuidv4()}])
    };

    const deleteContact=(id)=>{
       setContacts(contacts.filter(el=> el.id!==id));
    };
    const editContact=(contact)=>{
        const newContacts=contacts.map(el=> el.id===contact.id ? contact : el)
       setContacts(newContacts);
    }


    return (
        <div className="App">
            <Header
                contactListName={contactListName}
                userName={user}
            />
            {/*<Menu menu={menu}/>*/}
            <MenuRouter/>
            <Router contacts={contacts}
                    addNewContact={addNewContact}
                    deleteContact={deleteContact}
                    editContact={editContact}
            />

        </div>

    );
}

export default App;

{/*<Header2*/
}
{/*    contactListName={contactListName}*/
}
{/*    userName={user}/>*/
}
{/*<Header3*/
}
{/*    contactListName={contactListName}*/
}
{/*    userName={user}*/
}
{/*/>*/
}