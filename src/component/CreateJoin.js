// import React,{useState} from 'react'
// import { Link } from "react-router-dom"
// import Events from './Events';

// export default function CreateJoin(props) {

//     const [teams,setTeams] = useState([]);
//     useEffect(() => {
//         axios.get("http://localhost/teams"+props.match.params.event_id)
//             .then(result => {
//                 setTeams(result.data);
                
//             })
//             .catch(err => console.log(err))
//     }, [])

//     return (
//         <div>
//             <Link to={''}><button>Create Team</button></Link>
//             {
//                 teams.map(team=>{
//                     return(
//                         <TeamComponent key={team._id} id={team._id} name={team.name} members={team.members} />
//                     )
//                 })
//             }
//         </div>
//     )
// }
