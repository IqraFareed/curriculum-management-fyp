const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
        
    },

    password:{
        type: String,
        required:true
    },
    avatar:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now()
    },
    department:{
        type: String,
        ref:'department'
    }
    
});

module.exports=User= mongoose.model('user',UserSchema);