import { useEffect, useState } from 'react';
import { Character } from '../types/Character';

const BASE_API_URL = `https://rickandmortyapi.com/api/character/`;

export const useFetchCharacters = (name: string, gender: string) => {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        if (name || gender) {
            fetch(`${BASE_API_URL}?name=${name}&gender=${gender}`)
                .then(response => response.json())
                .then(data => setCharacters(data.results || []))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [name, gender]);

    return characters;
};
