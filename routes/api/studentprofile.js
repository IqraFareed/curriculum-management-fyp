const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult, body } = require('express-validator');
const request = require('request');
const config = require('config');
const StudentProfile = require('../../models/StudentProfile');
const User = require('../../models/User');
const { response } = require('express');
// route get api/studentprofile/me
// get current users profile
// private access

router.get('/me', auth, async(req , res)=>
{
    try{
        const studentprofile = await StudentProfile.findOne({user:req.user.id}).populate('user',['name', 'avatar']);
        if(!studentprofile){
            return res.status(400).json({msg:"there is no profile for this user"});
        }
        res.json(studentprofile);
    }
        catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});


// route post api/profile
// get current users profile
// private 
router.post('/',[auth , [
    check('registrationNo','registrationNo is required')
    .not().isEmpty(),
    check('Nationality','Nationality is required')
    .not().isEmpty()
]
],
async(req, res)=>{
     const errors=validationResult(req);
     if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array()});
     }
     const{
       
        fatherName,
        cnic,
        semester,
        dateOfBirth,
        domicile,
        Nationality,
        registrationNo,
        gpa,
        cgpa,
        department,
        courses,
        area,
        city,
        District,
        school,
        college,
        Olevels_matricMarks,
        alevels_fscMarks,
        feildOfStudy,
        yearOfMariculatioin,
        yearOfIntermediate,
        overseasEducation,
        section



     }=req.body;
     // Build profile object
     const profileFeilds ={};
     profileFeilds.user= req.user.id;
     if(fatherName) profileFeilds.fatherName=fatherName;
     if(courses) profileFeilds.courses=courses;
     if(cnic) profileFeilds.cnic=cnic;
     if(semester) profileFeilds.semester=semester;
     if(dateOfBirth) profileFeilds.dateOfBirth=dateOfBirth;
     if(domicile) profileFeilds.domicile=domicile;
     if(gpa) profileFeilds.gpa=gpa;
     if(cgpa) profileFeilds.cgpa=cgpa;
     if(Nationality) profileFeilds.Nationality=Nationality;
     if(registrationNo) profileFeilds.registrationNo=registrationNo;
     if(department) profileFeilds.department=department;
     if(school) profileFeilds.school=school;
     if(college) profileFeilds.college=college;
     if(Olevels_matricMarks) profileFeilds.Olevels_matricMarks=Olevels_matricMarks;
     if(alevels_fscMarks) profileFeilds.alevels_fscMarks=alevels_fscMarks;
     if(feildOfStudy) profileFeilds.feildOfStudy=feildOfStudy;
     if(yearOfMariculatioin) profileFeilds.yearOfMariculatioin=yearOfMariculatioin;
     if(yearOfIntermediate) profileFeilds.yearOfIntermediate=yearOfIntermediate;
     if(overseasEducation) profileFeilds.overseasEducation=overseasEducation;
     if(section) profileFeilds.section=section;

     if(courses){
         profileFeilds.courses= courses.split(',').map(courses=> courses.trim());
     } 
     //adress object
     profileFeilds.address={};
     
     if(area) profileFeilds.address.area=area;
     if(city) profileFeilds.address.city=city;
     if(District) profileFeilds.address.District=District;

     try{
        let studentprofile= await StudentProfile.findOne({user:req.user.id});
       
        if(studentprofile){
            //updated
           studentprofile= await StudentProfile.findOneAndUpdate(
            {user: req.user.id},
            {$set:profileFeilds},
            {new:true }
            );
           
            return res.json(studentprofile);
            
        }
        // Create
        
        studentprofile= new StudentProfile(profileFeilds);
    
        await studentprofile.save();
        res.json(studentprofile);
    }
     catch(err){
        console.error(err.message);
        res.status(500).send('Server Error ');
     }
   
    });
// route get api/profile
// get all profile
// public
router.get('/', async (req,res)=> {
    try{
        const studentprofiles = await StudentProfile.find().populate('user',['name','avatar']);
        res.json(studentprofiles);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
// route get api/profile/user/user_id
// get profile by user id
// public
router.get('/user/:user_id', async (req,res)=> {
    try{
        const studentprofile = await StudentProfile.findOne({user: req.params.user_id}).populate('user',['name','avatar']);
        if(!studentprofile)
         return res.status(400).json({msg:'Profile not found'});
        res.json(studentprofile);
    }
    catch(err){
        console.error(err.message);
        if(err.kind == 'ObjectId'){
            return res.status(400).json({msg:'Profile not found'});
        }
        res.status(500).send('Server Error');
    }
});

// route delete api/profile
// delete profile, user and post
// access Private
router.delete('/',auth, async (req,res)=> {
    try{
        // Remove profile
       await StudentProfile.findOneAndRemove({user: req.user.id});
       // Remove user
       await User.findOneAndRemove({_id: req.user.id});
       res.json({msg:'User deleted '});
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});



    
module.exports= router;
