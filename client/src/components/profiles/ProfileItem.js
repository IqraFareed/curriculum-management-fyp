import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

const ProfileItem = ({profile :{
    user:{_id , name },
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

}}) => {
    return (
        <div className="profile bg-light">
            <div>
                    <h2>{name}</h2>
                    <h2>{registrationNo}</h2>
                    <h5>{semester} {section}</h5>
                   

            <Link to={`/profile/${_id}`} className='btn btn-primary'>
                View Profile
            </Link>

            </div>
          
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
