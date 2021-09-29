
import React, { Component } from 'react';

export default class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
          tempUserId: '',                   
        };
    }

    
    
    
    
    render() {
        return (
           <div>
               <div style={{color: '#576271', fontSize : "17px"}}>
               <center><h2>Welcome to essential Skills!</h2></center>
               </div>              
            <div style={{color: '#576271', marginLeft:"30px"}}>
                <h3>Here’s what to do next:</h3>
                    <p style={{color: '#576271', marginLeft:"40px"}}>1. First sign in to your specific section in your class. Do this through the settings link. You may edit the settings at any time.</p>
                    <p style={{color: '#576271', marginLeft:"40px"}}>2. To see your assignments, access your dashboard via the “dashboard” link on the left (or in the menu button on the mobile).</p>                    
               
            </div>
           
            
           
        </div>

        );
     }
}
