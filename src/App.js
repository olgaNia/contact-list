import './App.css';
import Header from "./components/Header";
import Header2 from "./components/Header2";
import Header3 from "./components/Header3";
import Menu from "./components/Menu";
import Contacts from "./components/Contacts";
import MenuRouter from "./components/MenuRouter";

function App() {
    const contactListName = 'Contact List';
    const user = 'Alice';

    const menu = ['All', 'Family', 'Friends', 'Workmates']

    const contacts = [
        {
            id: Math.random(),
            name: 'Bill',
            number: '+1 470 457 3456',
            status: 'Friends',
        },
        {
            id: Math.random(),
            name: 'Anna',
            number: '+1 345 567 34567',
            status: 'Workmates',
        },
        {
            id: Math.random(),
            name: 'Jack',
            number: '+1 234 567 7890',
            status: 'Family',
        }
    ]


    return (
        <div className="App">
            <Header
                contactListName={contactListName}
                userName={user}
            />
            <Menu menu={menu}/>
            <Contacts contacts={contacts}/>
            <MenuRouter/>
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