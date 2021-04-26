import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function signIn() {
    return (
        <div className='br3 ba   b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 center' > 
            <main className="pa4 black-80">
            <form className="measure center form-sign-in">
                <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" HtmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"></input>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"></input>
                </div>
                 
                </fieldset>
                
                <div className="">
                   <Link to ='/app'> 
                        <input className="input1" type="submit" value='Sign in' ></input>
                    </Link>    
                </div>
                <div className="lh-copy mt3">
                    <Link to ='/register'>
                        <p className="f6 link dim black db">Register</p>
                    </Link>
                     
                    
                </div>
            </form>
            </main>
        </div>

        
    )
}

export default signIn;
