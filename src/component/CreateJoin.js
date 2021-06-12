import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Events from './Events';
import '../createTeam.css'

export default function CreateJoin(props) {

    const [status,setStatus] = useState(0);
    useEffect(() => {
        let event_id = props.match.params.event_id;
        axios.get("http://localhost/user/info/"+localStorage.getItem("user_id"))
            .then(user => {
               
                if(user.data.events && (event_id in user.data.events))
                    setStatus(1);
                console.log(user)
            })
            .catch(err => console.log(err))
    }, [])

    if(!status){

        return (
            
            <div className="content">
                
                <Link to={'/events/'+props.match.params.event_id+'/createTeam'} style={{textDecoration:"none"}}>
                <div class="cardcj">
         
                <div class="icon"><i class="material-icons md-36">group_add</i></div>
                <p class="title">Create Team</p>
                <p class="text">Click here to create {'\n'}a Team.</p>
      
                </div>
                </Link>
                <Link to={'/events/'+props.match.params.event_id+'/joinTeam'} style={{textDecoration:"none"}}>
                <div class="cardcj">
         
         <div class="icon"><i class="material-icons md-36">groups</i></div>
         <p class="title">Join Team</p>
         <p class="text">Click here to join{'\n'} a Team.</p>
      
        </div>
                </Link>
                {/* {
                    teams.map(team=>{
                        return(
                            <TeamComponent key={team._id} id={team._id} name={team.name} members={team.members} />
                        )
                    })
                } */}
            
            </div>

        )
    }
    else{
        return (
        <div>
            {/* {Team.name}
            {Team.members.map(member => {
                return <h6>{member}</h6>
            })}
            <form style={{display:localStorage.getItem("user_id")===Team.members[0]?'block':'none'}}>
                <h1>Invite a friend</h1>
                <input type="text" name="username" placeholder="Enter username"/>
                <input type="submit" value="Invite"/>
            </form> */}
        </div>
        
        )
    }

}
