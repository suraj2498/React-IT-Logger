import React, { useState, useEffect } from 'react';
import Techitem from './TechItem';
import Preloader from '../layout/Preloader';

const TechlistModal = () => {

    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
    })

    if(loading){
        return <Preloader />
    }

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();

        setTechs(data);
        setLoading(false);
    }

    return (
        <div>
            
        </div>
    )
}

export default TechlistModal;
