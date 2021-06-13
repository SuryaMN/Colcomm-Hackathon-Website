import React,{useState,useEffect} from 'react'
import NotifContainer from './NotifContainer'
import axios from 'axios'

export default function Notifications() {

    const [notifications,setNotifications] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/notifications/"+localStorage.getItem("username"))
            .then(result => {
                setNotifications(result.data);
                console.log(result.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                notifications.map(notification =>{
                    return <NotifContainer key={notification._id} id={notification._id} from={notification.from} to={notification.to}  msg={notification.msg} notif_type={notification.notif_type} team={notification.team}/>
                })
            }
        </div>
    )
}
