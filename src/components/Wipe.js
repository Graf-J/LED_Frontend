import React from 'react';
import axios from 'axios';
import Slider from '@material-ui/core/Slider';
import './Wipe.css';

function Wipe({ color }) {

    const handleSliderValue = (e) => {
        if (parseInt(e.target.textContent) > 0) {
            let reversedValue = (parseInt(e.target.textContent) - 101) * (-1);
            axios.post('http://192.168.178.48:1254/api/modus', {
                "modus": "wipe",
                "speed": reversedValue
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
    }

    return (
        
        <div>
            <style>
                {
                    `
                    @keyframes wipe {
                        0% {
                            border-left: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                        }
                        14% {
                            border-left: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                            border-top: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                        }
                        28% {
                            border-left: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                            border-top: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                            border-right: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                        }
                        42% {
                            border-left: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                            border-top: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                            border-right: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                            border-bottom: 3px solid rgb(${color[0]}, ${color[1]}, ${color[2]});
                        }
                        58% {
                            border-left: 3px solid rgb(59, 59, 59);
                        }
                        72% {
                            border-left: 3px solid rgb(59, 59, 59);
                            border-top: 3px solid rgb(59, 59, 59);
                        }
                        86% {
                            border-left: 3px solid rgb(59, 59, 59);
                            border-top: 3px solid rgb(59, 59, 59);
                            border-right: 3px solid rgb(59, 59, 59);
                        }
                        100% {
                            border-left: 3px solid rgb(59, 59, 59);
                            border-top: 3px solid rgb(59, 59, 59);
                            border-right: 3px solid rgb(59, 59, 59);
                            border-bottom: 3px solid rgb(59, 59, 59);
                        }
                    }
                    `
                }
            </style>
            <p>Wipe</p>
            <div className="wipe-component">
                <Slider
                    className="slider"
                    onChangeCommitted={handleSliderValue}
                    defaultValue={40}
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={100}
                />
            </div>
        </div>
    )
}

export default Wipe
