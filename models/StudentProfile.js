const mongoose = require('mongoose');
const StudentProfileSchema = new mongoose.Schema({
      user:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'user'
      },
    
    fatherName:{
        type: String, 
        required: true
    },
    registrationNo:{
        type: String, 
        required: true,
        unique:true
    },
    Nationality:{
        type: String, 
        required: true,
        
    },
    cnic:{
        type:String,
        required:true,
        unique:true
    },
    address: {
        District: {
          type: String,
          required:true
        },
        
        area: {
          type: String,
          required:true
        },
        city: {
          type: String,
          required:true
        }
      },
    
   
    semester:{
        type:Number,
        required:true
    },
    section:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:Date,
        required:true
    },
    domicile:{
        type:String,
        required:true
    },
    
        school: {
            type:String,
            required:true
        },
        college:{
            type:String,
            required:true
        },
        Olevels_matricMarks:{
            type: Number,
            required: true
        },
        alevels_fscMarks:{
            type: Number,
            required: true
        },
        
        feildOfStudy:{
            //pre-eng  // pre-med
            type: String,
            required: true
        },
        yearOfMariculatioin:{
            
            type: Date,
            required: true
        },
        yearOfIntermediate:{
            
            type: Date,
            required: true
        },
        overseasEducation:{
            
            type: String,  
        },
    
        gpa:{
            
            type:mongoose.SchemaTypes.Decimal128,  
            required:true
        },
        cgpa:{
            
            type: mongoose.SchemaTypes.Decimal128,  
            required:true
        },

    department:{
        type: String,
        required:true
    },
    courses: {
        type: [String],
        required: true
      },
    grades:{
        type:"String"
          
    }

});

module.exports = StudentProfile= mongoose.model('studentprofile' ,StudentProfileSchema);