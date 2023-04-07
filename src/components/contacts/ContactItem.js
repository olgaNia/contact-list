import React, {useState} from 'react';

const ContactItem = (props) => {
const [isInEdit,setIsInEdit]=useState(false);
    const [name, setName] = useState(props.contact.name);
    const [number, setNumber] = useState(props.contact.number);
    const [status, setStatus] = useState(props.contact.status);

    const handleButtonSave=()=>{
        const editedContact={...props.contact,
        name:name,
        number:number,
            status
        };
        props.editContact(editedContact)
        setIsInEdit(!isInEdit)
    }

    return (
      <li>
          {props.contact.name}
          {'📞'}
          {props.contact.number}
          {' '}
          <button onClick={()=>props.deleteContact(props.contact.id)}>
              Delete
          </button>
          {!isInEdit ? (
              <button onClick={()=> setIsInEdit(!isInEdit)}>
                  Update
              </button>
              ):(
              <>
          <input type="text"
                 value={name}
          onChange={(event)=> setName(event.target.value)}/>

          <input type="text"
                 value={number}
                 onChange={(event)=> setNumber(event.target.value)}/>

                  <select value={status}
                      onChange={event => setStatus(event.target.value)}>

                      <option value=''>Choose</option>
                      <option value='Family'>Family</option>
                      <option value='Friends'>Friends</option>
                      <option value='Workmates'>Workmates</option>
                  </select>
          <button onClick={handleButtonSave}>
              Save
          </button>
          <button onClick={()=> setIsInEdit(!isInEdit)}>
              Cancel
          </button>
          </>
              )}
      </li>
    );
};

export default ContactItem;