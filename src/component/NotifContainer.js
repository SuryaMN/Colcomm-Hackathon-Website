import axios from 'axios'
import React from 'react'

export default function NotifContainer(props) {

    function handleAccept(){
        // var notification = {
        //     from :localStorage.getItem("username"),
        //     to:props.from,
        //     team:props.team,
        //     msg:"Your request to join "+props.team+" has been accepted",
        //     notif_type:"info"
        // }
    }

    function handleReject(){
        var notification = {
            from :localStorage.getItem("username"),
            to:props.from,
            team:props.team,
            msg:"Your request to join "+props.team+" has been rejected",
            notif_type:"info"
        }

        axios.post('http://localhost/notifications/',notification)
        .then(result => alert(result.data.msg))
        .catch(err => console.log(err))
    }
    if(props.notif_type === "request"){

        return (
            <div>
                <span>{props.msg}</span>
                <button onClick={handleAccept}>Accept</button>
                <button onClick={handleReject}>Reject</button>
            </div>
        )
    }
    else if(props.notif_type === "info"){
        return(
            <div>
                <span>{props.msg}</span>
            </div>
        )
    }
}
