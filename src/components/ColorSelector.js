import React from 'react';
import ColorCircle from './ColorCircle';
import './ColorSelector.css'

function ColorSelector({ handOverColor }) {

    return (
        <div className='color-selector'>
            <ColorCircle r='255' g='0' b='0' handOverColor={handOverColor}/>
            <ColorCircle r='255' g='127' b='0' handOverColor={handOverColor}/>
            <ColorCircle r='255' g='255' b='0' handOverColor={handOverColor}/>
            <ColorCircle r='127' g='255' b='0' handOverColor={handOverColor}/>
            <ColorCircle r='0' g='255' b='0' handOverColor={handOverColor}/>
            <ColorCircle r='0' g='255' b='127' handOverColor={handOverColor}/>
            <ColorCircle r='0' g='255' b='255' handOverColor={handOverColor}/>
            <ColorCircle r='0' g='127' b='255' handOverColor={handOverColor}/>
            <ColorCircle r='0' g='0' b='255' handOverColor={handOverColor}/>
            <ColorCircle r='127' g='0' b='255' handOverColor={handOverColor}/>
            <ColorCircle r='255' g='0' b='255' handOverColor={handOverColor}/>
            <ColorCircle r='255' g='0' b='127' handOverColor={handOverColor}/>
            <ColorCircle r='0' g='0' b='0' handOverColor={handOverColor}/>
        </div>
    )
}

export default ColorSelector
