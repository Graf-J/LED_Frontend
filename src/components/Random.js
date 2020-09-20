import React from 'react';
import axios from 'axios';
import Slider from '@material-ui/core/Slider';
import './Random.css';

function Random({ color }) {

    const handleSliderValue = (e) => {
        if (parseInt(e.target.textContent) > 0) {
            let reversedValue = (parseInt(e.target.textContent) - 50) * (-1);
            axios.post('http://192.168.178.48:1254/api/modus', {
                "modus": "random",
                "speed": reversedValue
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
    }

    return (
        
        <div>
            <p>Random</p>
            <div className="random-component" style={{border: `3px dotted rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
                <Slider
                    className="slider"
                    onChangeCommitted={handleSliderValue}
                    defaultValue={40}
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={45}
                />
            </div>
        </div>
    )
}

export default Random
