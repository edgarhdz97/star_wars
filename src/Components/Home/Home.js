import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/ApiContext';
import { obtenerDatosStarWars } from '../../Servicios/ApiStarWars';

export const Home = () => {

    const { data } = useContext(DataContext);
    
    useEffect(() => {
      const obtenerDatosApi = async () => {
        const respuesta = await obtenerDatosStarWars();
        console.log(respuesta);
      };

      obtenerDatosApi();
    }, [])
    

  return (
    <div>
        <h1>Home</h1>
        <hr />
        <pre>
            { JSON.stringify(data, null, 2) }
        </pre>
    </div>
  )
}
