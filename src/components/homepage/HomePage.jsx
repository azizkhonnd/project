import { useContext, useState } from 'react';
import './HomePage.jsx';
import { Context } from '../../../context';

const ContactsComponent = () => {
    const { formData, setFormData } = useContext(Context);


    const handleDelete = (DeleteItem) => {
        const newFormData = [...formData];
        newFormData.splice(DeleteItem, 1);
        setFormData(newFormData);
    };


    return (
        <>
            <div className='container contactsContainer'>
                <h2>About</h2>
                {formData.map((contact, index) => (
                    <div className='contactCard' key={index}>
                        <label >Select image:</label>
                        <img src={contact.img} alt="img" width={250} height={160} />
                        <h3>{contact.name}</h3>
                        <p>About: Lorem ipsum dolor s officiis maiores dolores, accusamus maxime similique dignissimos ipsum soluta.{contact.address}</p>
                        <p>Phone: {contact.phone}</p>
                        <p>Email: {contact.email}</p>
                        <div className='btns'>
                            <button className='deleteBtn' onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default ContactsComponent;
