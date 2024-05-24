import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Chat() {
    const location = useLocation();
    const user=JSON.parse(localStorage.getItem("user"))
    // Now you can use the `userData` object in your component

    return (
        <div>
            
        </div>
    );
}
