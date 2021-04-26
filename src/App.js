import React, {useState} from 'react';
import Navigation from './components/navigation/Navigation'
import Logo from './components/Logo/Logo';
import Input from './components/Input/Input';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import ImageComponent from './components/ImageComponent/ImageComponent';
import {BrowserRouter as Router, Switch, Route}
from 'react-router-dom';
import SignIn from './components/signIn/SignIn';
import Register from './components/Register/Register';


const app = new Clarifai.App({
    apiKey : '5c149c62ff934b709ea84e55e2b149d7'
});

const particlesParams={
    particles:{
        number:{
            value:50,
            density:{
                enable:true,
                value_area:500
            }
        }
    }
}





 
function App() {
    const [input,changeInput] = useState('');
    const [face, changeFace] = useState({});
     

    function myChangeInput(e){
        
        changeInput(e.target.value)
        console.log(input)
    }

    const calculateFace = (data)=>{
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('imgFace');
        const width = Number(image.width);
        const height = Number(image.height);
        console.log(width,height);
        return{
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol : width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }

    function setFace(box){
        console.log(box)
         changeFace(box)
         
    }

    function onButtomSubmit(){

        console.log('click')

        app.models.predict(Clarifai.FACE_DETECT_MODEL, input)
        .then(
            (response)=>{
                 
                  
               setFace( calculateFace(response))
            },
            (error)=>{
                console.log(error, 'error')
            }
        )
         
        
    }








    

    
    return (
        <div className='App' style={{height:'120vh'}}>
            <Particles className='particles' params={particlesParams}/>
            <Router> 
                
                <Switch> 
                    <Route path='/app'>
                         
                        <Navigation/>
                        <Logo/>
                        <Rank/>
                        <Input inputChange={myChangeInput} buttonSubmit={onButtomSubmit}/>
                        <ImageComponent faceBox={face} img={input}/>
                    </Route>
                    <Route path='/register'>
                        <Register/>
                    </Route>
                    <Route path ='/'>
                        <SignIn/>
                    </Route> 
                </Switch>    
                 
            </Router>    
        </div>
    )
}

export default App;
