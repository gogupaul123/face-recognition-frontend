import React from 'react';
import Tilt from 'react-tilt';
import '../../styles/Logo.css';
import Brain from './brain.png';

function Logo() {
    return (
        <div className='ma4 mt0 logo'>
            <Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner" style={{textAlign:'center'}}><img src={Brain} alt='logo'></img> </div>
            </Tilt>
        </div>
    )
}

export default Logo;
