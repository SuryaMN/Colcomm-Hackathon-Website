import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../button_style.css'
import '../style.css'


function EventComponent(props){
    return (
        
            

             <div className="main-container">
  
                <div className="card-container">
                <div className="card card-1">
                <h3>{props.name}</h3>
                <h2 className="card__title">{props.description}</h2>
                <Link to={'/events/'+props.id} ><span></span></Link> 
                
                
                </div>

                
            </div>
            </div> 
            
 
        

    )
}

export default EventComponent;