import { createContext, useState } from "react";

const Context = createContext()

const AppContext = ({ children }) => {
    const [formData, setFormData] = useState([]);
    
    const [contactData, setContactData] = useState([])
    return <Context.Provider value={{ formData, setFormData, contactData, setContactData }}>{children}</Context.Provider>
}

export { AppContext, Context }