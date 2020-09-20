import React from 'react';
import axios from 'axios';
import Slider from '@material-ui/core/Slider';
import './Brightness.css';

function Brightness({ color }) {

    const handleSliderValue = (e) => {
        if (parseInt(e.target.textContent) > 0) {
            let reversedValue = parseInt(e.target.textContent);
            axios.post('http://192.168.178.48:1254/api/modus', {
                "modus": "pulse",
                "brightness": reversedValue
            })
                .then(response => console.log(response))
                .catch(err => console.log(err))
        }
    }

    return (
        <div>
            <p>Brightness</p>
            <div className="brightness-component" style={{ boxShadow: `0px 0px 20px 7px rgb(${color[0]}, ${color[1]}, ${color[2]})` }}>
            <style>{
                `@keyframes pulse {
                    0% {box-shadow: 0px 0px 20px 7px rgb(${color[0]}, ${color[1]}, ${color[2]});}
                    50% {box-shadow: 0px 0px 20px 7px rgb(60, 60, 60);}
                    100% {box-shadow: 0px 0px 20px 7px rgb(${color[0]}, ${color[1]}, ${color[2]});}
                }`
            }
            </style>
                <Slider
                    className="slider"
                    onChangeCommitted={handleSliderValue}
                    defaultValue={255}
                    valueLabelDisplay="auto"
                    step={1}
                    min={10}
                    max={255}
                />
            </div>
        </div>
    )
}

export default Brightness
