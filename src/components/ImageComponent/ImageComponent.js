import React from 'react';
import '../../styles/faceRecognition.css';

 

function ImageComponent({img, faceBox}) {
    return (
        <div className='center ma'>
            <div className='absolute mt2'> 
                <img id ='imgFace' src={img} style={{width: '500px', height:'auto', marginTop:'1vh'}} ></img>
                <div  style ={{top:faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left:faceBox.leftCol}}className='bounding-box'></div>
            </div>
        </div>
    )
}

export default ImageComponent
