import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function Navigation() {
    return (
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <Link to ='/'>
                <p className='f3 link dim black   pa3 pointer'>Sign Out</p>
            </Link>
             
        </nav>
    )
}

export default Navigation
