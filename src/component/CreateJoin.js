import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import Events from './Events';
import '../createTeam.css'

export default function CreateJoin(props) {

    const [team,setTeam] = useState();
    const [status,setStatus] = useState(0);
    useEffect(() => {


        let event_id = props.match.params.event_id;
        axios.get("http://localhost/user/info/"+localStorage.getItem("user_id"))
            .then(user => {
               
                if(user.data.events && (user.data.events.indexOf(event_id))!==-1) {
                    // console.log("Hello")
                    let team_id = user.data.teams[user.data.events.indexOf(event_id)];
                    console.log(team_id)
                    axios.get("http://localhost/events/team/"+team_id)
                    .then(result => {
                        console.log(result.data);
                        setTeam(result.data);
                        
                        setStatus(1);
                    })
                    .catch(err => console.log(err))
                   
                 
                }
                
                
            })
            .catch(err => console.log(err))
    }, [])

    if(!status){

        return (
            
            <div className="content">
                
                <Link to={'/events/'+props.match.params.event_id+'/createteam'} style={{textDecoration:"none"}}>
                <div class="cardcj">
         
                <div class="icon"><i class="material-icons md-36">group_add</i></div>
                <p class="title">Create team</p>
                <p class="text">Click here to create {'\n'}a team.</p>
      
                </div>
                </Link>
                <Link to={'/events/'+props.match.params.event_id+'/jointeam'} style={{textDecoration:"none"}}>
                <div class="cardcj">
         
         <div class="icon"><i class="material-icons md-36">groups</i></div>
         <p class="title">Join team</p>
         <p class="text">Click here to join{'\n'} a team.</p>
      
        </div>
                </Link>
                {/* {
                    teams.map(team=>{
                        return(
                            <teamComponent key={team._id} id={team._id} name={team.name} members={team.members} />
                        )
                    })
                } */}
            
            </div>

        )
    }
    else{
        return (
        <div>
            {team.name}
            {team.members.map(member => {
                return <h6>{member}</h6>
            })}
            <form style={{display:localStorage.getItem("username")===team.members[0]?'block':'none'}}>
                <h1>Invite a friend</h1>
                <input type="text" name="username" placeholder="Enter username"/>
                <input type="submit" value="Invite"/>
            </form>
        </div>
        
        )
    }

}
