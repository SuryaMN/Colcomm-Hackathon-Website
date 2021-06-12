import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../style.css'
import EventComponent from '../component/EventComponent'


function Events(){

    const [events,setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/events")
            .then(result => {
                setEvents(result.data);
                
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                events.map(e=>{
                   return (<EventComponent key={e.id} id={e._id} name={e.name} description={e.description}/>)
                })
            }
        </div>
    )

}

export default Events;