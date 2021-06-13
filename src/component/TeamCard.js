import React,{useState} from 'react'
import axios from 'axios';

export default function TeamCard(props) {

    function sendRequest(){
        axios.get("http://localhost/events/"+props.event_id)
        .then( result => {
            
            var notification ={
                from:localStorage.getItem("username"),
                to:props.members[0],
                team:props.name,
                msg:localStorage.getItem("username")+" requested to join "+props.name+" in "+result.data.name,
                notif_type:"request"
            }
            axios.post("http://localhost/notifications/",notification)
            .then(res => alert(res.data.msg))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err))

       
    }
    return (
        <div>
            <h2>{props.name}</h2>
            <ul>
                {
                    props.members.map(member => {
                        return (<li key={member}>{member}</li>)
                    })
                }
            </ul>
            <button onClick={sendRequest}>Request to Join</button>
        </div>
    )
}
