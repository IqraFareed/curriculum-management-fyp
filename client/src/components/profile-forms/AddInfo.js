import React ,{Fragment, useState} from 'react'
import {Link , withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import {addInfo} from '../../actions/profile'


const AddInfo = ({addInfo , history}) => {
    const [formData , setFormData]= useState({
        fatherName:'',
        cnic:'',
        semester:'',
        dateOfBirth:'',
        domicile:'',
        Nationality:'',
        registrationNo:'',
        gpa:'',
        cgpa:'',
        department:'',
        courses:'',
        area:'',
        city:'',
        District:'',
        school:'',
        college:'',
        Olevels_matricMarks:'',
        alevels_fscMarks:'',
        feildOfStudy:'',
        yearOfMariculatioin:'',
        yearOfIntermediate:'',
        overseasEducation:''
    });
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


     }= formData;

     const onChange = e => 
     setFormData({...formData, [e.target.name]: e.target.value});

     const onSubmit = e =>{
        e.preventDefault();
        addInfo(formData , history );
     }

     return(
    <Fragment>
             <h1 className="large text-primary">
        Add Student's Information
      </h1>
    
      
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
         <input type ="text"  placeholder="Father's Name" name="fatherName" value={fatherName} onChange={e => onChange(e)}/>
         <small className="form-text">Enter Your fahter's name</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="CNIC Number" name="cnic" value={cnic} onChange={e => onChange(e)}/>
          <small className="form-text">
           Enter Cnic number if not available than B-form number</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Semester" name="semester" value={semester} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Enter Semester</small
          >
        </div>
        <div className="form-group">
          <input type="text" placeholder="Section" name="section" value={section} onChange={e => onChange(e)}/>
          <small className="form-text"
            >Enter Section</small
          >
        </div>
        <div className="form-group">
          <input type="date" placeholder="Date of Birth" name="dateOfBirth" value={dateOfBirth} onChange={e => onChange(e)}/>
          
        </div>
        <div className="form-group">
          <input type="text" placeholder="Domicile" name="domicile" value={domicile} onChange={e => onChange(e)}/>
          <small className="form-text">
            e.g. Punjab
            </small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Nationality" name="Nationality" value={Nationality} onChange={e => onChange(e)}/>
          <small className="form-text">e.g. Pakistan</small>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Registration No" name="registrationNo" value={registrationNo} onChange={e => onChange(e)}/>
          <small className="form-text">e.g. FA-17-BSE</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="GPA" name="gpa" value={gpa} onChange={e => onChange(e)}/>
          <small className="form-text">e.g. 3.0</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="CGPA" name="cgpa" value={cgpa} onChange={e => onChange(e)}/>
          <small className="form-text">e.g. 3.0</small>
        </div>

        <div className="form-group">
          <input type="text" placeholder="department" name="department" value={department} onChange={e => onChange(e)}/>
          <small className="form-text">e.g. Computer Science</small>
        </div>

        <div class="form-group">
          <input type="text" placeholder="* courses" name="courses" value={courses} onChange={e => onChange(e)}/>
          <small class="form-text"
            >Please use comma separated values (eg.
            eca, islamiate ,eng)</small
          >
        </div>
        <div className="form-group ">
          <input type="text" placeholder="Area" name="area" value={area} onChange={e => onChange(e)}/>
        </div>
        <small class="form-text"
            >house no , st no , sector , block ,area</small
          >
        <div className="form-group ">
          <input type="text" placeholder="City Name" name="city" value={city} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="District" name="District" value={District} onChange={e => onChange(e)}/>
        </div>

        <h3>Early Education</h3>

        <div className="form-group ">
          <input type="text" placeholder="School" name="school" value={school} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="College" name="college" value={college} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="Olevels / metrics marks" name="Olevels_matricMarks" value={Olevels_matricMarks} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="Alevels / Fsc marks" name="alevels_fscMarks" value={alevels_fscMarks} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="Feild of Study" name="feildOfStudy" value={feildOfStudy} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="year of matriculation" name="yearOfMariculatioin" value={yearOfMariculatioin} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="Year of Intermediate" name="yearOfIntermediate" value={yearOfIntermediate} onChange={e => onChange(e)}/>
        </div>
        <div className="form-group ">
          <input type="text" placeholder="Over seas Education" name="overseasEducation" value={overseasEducation} onChange={e => onChange(e)}/>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
       
      </form>
    </Fragment>
     );
};

AddInfo.propTypes = {
   addInfo:PropTypes.func.isRequired
};


export default connect(null, {addInfo})(withRouter (AddInfo));

