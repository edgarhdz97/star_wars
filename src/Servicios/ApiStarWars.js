import axios from 'axios';

export const obtenerDatosStarWars = async () => {

    try {
        return await axios.get('https://swapi.dev/api/starship');
    } catch (error) {
        return error.response;
    }
};
