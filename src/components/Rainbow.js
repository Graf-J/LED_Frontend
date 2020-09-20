import React from 'react';
import axios from 'axios';
import Slider from '@material-ui/core/Slider';
import './Rainbow.css';

function Rainbow() {

    const handleSliderValue = (e) => {
        if (parseInt(e.target.textContent) > 0) {
            let reversedValue = (parseInt(e.target.textContent) - 51) * (-1);
            axios.post('http://192.168.178.48:1254/api/modus', {
                "modus": "rainbow",
                "speed": reversedValue
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <p>Rainbow</p>
            <div className="rainbow-component">
                <Slider
                    className="slider"
                    onChangeCommitted={handleSliderValue}
                    defaultValue={20}
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={50}
                />
            </div>
        </div>
    )
}

export default Rainbow
