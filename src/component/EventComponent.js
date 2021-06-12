import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../style.css'


function EventComponent(props){
    return (
        <div>
            <Link to={'/events/'+props.id} ><h3>{props.name}</h3></Link> 
            <h6>{props.description}</h6>
        </div>

    )
}

export default EventComponent;