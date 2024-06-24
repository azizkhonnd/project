import { useContext } from 'react';
import './Contacts.css';
import { Context } from '../../../context';

const ContactsComponent = () => {
  const { contactData, setContactData } = useContext(Context);
  const handleDelete = (DeleteItem) => {
    const newFormData = [...contactData];
    newFormData.splice(DeleteItem, 1);
    setContactData(newFormData);
  };

  return (
    <div className='container contactsContainer'>
      <h2>Contact Information</h2>
      {contactData.map((contact, index) => (
        <div className='contactCard' key={index}>
          <h3>{contact.name}</h3>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Address: {contact.address}</p>
          <div className='btns'>
            <button className='deleteBtn' onClick={() => handleDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactsComponent;
