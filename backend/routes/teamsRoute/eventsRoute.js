const router = require("express").Router();

const Event = require("../../models/events.model")
const User = require("../../models/signup.model")
const Team = require("../../models/teams.model")


router.get("/",(req,res)=>{
    Event.find()
    .then(events => res.status(200).json(events))
    .catch(err => res.status(400).json("Error: "+err))
})
router.get("/:event_id",(req,res)=>{
    Event.findOne({_id:req.params.event_id})
    .then(event => res.status(200).json(event))
    .catch(err => res.status(400).json("Error: "+err))
})

router.get("/team/:team_id",(req,res)=>{
    Team.findOne({_id:req.params.team_id})
    .then(team => res.status(200).json(team))
    .catch(err => res.status(400).json("Error: "+err))

})


router.get('/:event_id/teams',(req,res)=>{
    Team.find({event_id:req.params.event_id})
    .then(teams => res.status(200).json(teams))
    .catch(err=>res.status(400).json("Error:"+err))
})


router.post('/createTeam',(req,res)=>{
    const newTeam = new Team({
        name:req.body.name,
        event_id:req.body.event_id,
        members:req.body.members,

    })

    newTeam.save((err,team)=>{
        if(err) throw err;
        else{
            User.findOne({username:team.members[0]})
            .then(result =>{
                let event_id = team.event_id
                // if(result.events)
                //     result.events[event_id] = team._id;
                // else
                //     result.events = {[event_id]:team._id};
                if(result.events){
                    result.events.push(event_id);
                    result.teams.push(team._id);
                }
                else{
                    result.events = [event_id];
                    result.teams = [team._id]
                }
                result.save((err,user)=>{
                    
                    if(err) throw err;
                    else{
                        console.log(user);
                        res.status(200).json({"msg":"Team has been created"})
                    }
                })
            })
            .catch(err => res.status(400).json({"msg":"Some problem occurred"}))
        }
    })
})


// router.post('/:id/create',(req,res)=>{
    
//     const newTeam = new Team({
//         members:req.body.members,
//         event:req.params.id
//     })

//     if(!req.body.students_arr){
//         return res.status(200).json({msg:"Enter all fields"})
//     }
    
//     //Checking if no 1 is already registered
//     var pass=1;
//     //var fail=0;
    

//     const checkRegister = async ()=>{
//         for(let i=0;i<req.body.members.length;i++){

//             let msg;
//             await User.findOne({username : (req.body.members)[i] })
//             .then(result=>{
//                 if(result.events.req.params.id){
//                     //console.log("inside if");
//                     msg = "Student already registered!"
//                     pass=0
//                 }
//             })
//             .catch(err => {
//                 pass=0;
//                 msg = "SRN entered doesn't exist!"
//             });
            
//             //console.log("After catch");
           
            
//             if(!pass) return res.status(200).json({msg});
    
//         }

//         //console.log("after for----------------");

        

//         if(pass){
//                 //console.log("Registering---------");
//                 newTeam.save((err,newReg)=>{
//                 if(err) throw err;
//                 else{

//                     for(let i=0;i<newReg.members.length;i++){

//                         User.findOne({mem_id : (newReg.members)[i] })
//                         .then(result=>{
//                             result.events.req.params.id = newReg.id;
//                             result.save()
//                             .then(console.log(result))
//                             .catch(err=>res.json("Error: "+err))
//                         })
//                         .catch(err => res.status(400).json("Error: "+err));
                
//                     }

//                     return res.status(200).json({
//                         msg:"Registered!"
//                     })

                
//                 }
//             })
//         }
//     }

//     checkRegister();

// })



module.exports=router;

