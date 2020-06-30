import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = () => {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    const getLogs = async () => {
        setLoading(true);
        // Get the data from logs, dont need full path because of proxy
        const res = await fetch('/logs');
        // Format response data to json
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if(loading){
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? 
            (<p className="center">No Active Logs</p>) : 
            (logs.map(log => ( 
                <LogItem key={log.id} log={log}/>
            )))}
        </ul>
    )
}

export default Logs;