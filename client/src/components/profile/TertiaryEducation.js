import React from 'react'
import PropTypes from 'prop-types'

const TertiaryEducation = ({profile:{
    registrationNo,
    semester,
    gpa,
    cgpa,
    department,
    section,
    
}}) => {
    return(
        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">Tertiary Education</h2>
          <div>
            <h3 class="text-dark">Registration Number</h3>
            <p>{registrationNo}</p>
          </div>
          <div>
            <h3 class="text-dark">Semester</h3>
            <p>{semester}</p>
            <h3 class="text-dark">Section</h3>
            <p>{section}</p>
            <h3 class="text-dark">Department</h3>
            <p>{department}</p>
            <h3 class="text-dark">Department</h3>
            <p>{department}</p>
          </div>
    
        </div>

    )
           
                
              
            
}

TertiaryEducation.propTypes = {
        profile : PropTypes.object.isRequired
}

export default TertiaryEducation




