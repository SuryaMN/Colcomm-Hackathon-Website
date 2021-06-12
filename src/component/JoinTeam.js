import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function JoinTeam(props) {
    const [teams,setTeams] = useState([]);
    useEffect(() => {
        let event_id = props.match.params.event_id;
        axios.get("http://localhost/events/"+event_id+"/teams")
            .then(result => {
                setTeams(result.data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                teams.map(team =>{
                    return(
                        <div>
                            <h2>{team.name}</h2>
                            <ul>
                                {
                                    team.members.map(member => {
                                        return <li>{member}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}
