import React from 'react'
import { createContext, useState } from 'react'

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    
    const [test, setTest] = useState("test")
    const [drugName, setDrugName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [desc, setDesc] = useState("");
    const [date] = useState(new Date(Date.now()));
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    // const [time] = useState(new Date(Date.now).getHours());

    return (
        <DataContext.Provider value={{test, drugName, setDrugName, category, setCategory, quantity, setQuantity, desc, setDesc, date, loading,setLoading,success, setSuccess}}>
            {children}
        </DataContext.Provider>
    )
}


