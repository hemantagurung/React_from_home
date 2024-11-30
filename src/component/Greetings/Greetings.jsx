import React from 'react'
import PropTypes from 'prop-types'


const Greetings = (props) => {
    if (props.isLoggedin){
        return <h1>Hello {props.name ? "YES" : "NO"}</h1> 
     
    }   else{
        
      <p>This is a hello from Hemanta</p>
    }
   
  
}



export default Greetings