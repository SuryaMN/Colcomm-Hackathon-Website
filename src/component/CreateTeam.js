import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function CreateTeam(props) {
    
    const [team, setTeam] = useState({
        name: '',
        event_id: props.match.params.event_id,
        members:[localStorage.getItem("user_id")]
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setTeam(prevValue => {
            return {
                ...prevValue,
                [name]: value

            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        axios.post('http://localhost/events/createTeam',team)
        .then(result => {
            alert(result.data.msg)
        })
        .catch((err) => console.log("Error :" + err))

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="name" value={team.name} placeholder="Team Name"/>
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

