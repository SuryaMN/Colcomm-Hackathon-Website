const mongoose = require("mongoose")


var notificationSchema = new mongoose.Schema({
    from:{type:String, required:true},
    to:{type:String,required:true},
    msg:{type:String},
    notif_type:{type:String,required:true}
    
},{timestamps:true})


const Notification = mongoose.model("Notification",notificationSchema)


module.exports = Notification;