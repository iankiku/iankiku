import React from 'react';
import useFetchData from '../components/dataFetch';




export const About = () => {
    const [about] = useFetchData()
    return (
        <div>About skills
            {
                about.map(about => (<li key={about.id}>{about.body}</li>))
            }
        </div>
    );
}

