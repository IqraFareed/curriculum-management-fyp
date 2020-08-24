import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const EarlyEducation = ({profile :{
    school,
    college,
    Olevels_matricMarks,
    alevels_fscMarks,
    feildOfStudy,
    yearOfMariculatioin,
    yearOfIntermediate,
    overseasEducation
}}) => 
   
        <div class="profile-edu bg-white p-2 ">
        <h2 class="text-primary">Early Education</h2>
        <div>
          <h3>School</h3>
          <p>{school}</p>
          <h3>College</h3>
          <p>{college}</p>
          <h3>Olevels or Matric Score</h3>
          <p>{Olevels_matricMarks}</p>
          <h3>Alevels or FSC Score</h3>
          <p>{alevels_fscMarks}</p>
          <h3>Feild of Study</h3>
          <p>{feildOfStudy}</p>
          <h3>Year of Matriculation</h3>
          <p>{yearOfMariculatioin}</p>
          <h3>Year of Intermediate</h3>
          <p>{yearOfIntermediate}</p>
         
          {overseasEducation &&(
              <Fragment>{feildOfStudy}</Fragment>
          )}
        </div>
      </div>

    


EarlyEducation.propTypes = {
    profile: PropTypes.object.isRequired

}

export default EarlyEducation;
