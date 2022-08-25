import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const dataFixed = {
    nombre: 'edgar',
    edad: 25,
};

export const DataProvider = (props) => {

    const [data, setData] = useState(dataFixed);

    return (
        <DataContext.Provider value={{ data, setData }} >
            { props.children }
        </DataContext.Provider>
    )
}

