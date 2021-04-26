import React from 'react';
import '../../styles/Input.css';
function Input({inputChange, buttonSubmit}) {

    
    return (
        <div className='input'>
            <p className='f3'>
                This program will detect the faces in your pictures. Give it a go.
            </p>
            <div className='input-inp'>
                <div className='center pa4 br3 shadow-5 form'>
                <input onChange={inputChange} className='f4 pa2 w-70 center inp' type='text' placeholder='Paste the image url here...'></input>
                    <button onClick={buttonSubmit}
                     className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple inp pointer'>Detect</button>
                </div>
                 
            </div>
        </div>
    )
}

export default Input;
