import React from 'react';
import axios from 'axios';
import './ColorCircle.css';

function ColorCircle({ r, g, b, handOverColor }) {

    const postColor = () => {
        handOverColor(r, g, b)

        axios.post('http://192.168.178.48:1254/api/modus', {
            "modus": "selectColor",
            "r": r,
            "g": g,
            "b": b
        })
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return (
        <div className='color-circle' onClick={postColor} style={{ background: `rgb(${r}, ${g}, ${b})` }} />
    )
}

export default ColorCircle
