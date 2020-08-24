import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({profile:{

    user:{name , email},
    fatherName,
    cnic,
    dateOfBirth,
    domicile,
    Nationality,
    address
}}) => {
    return (
       
            <div className='profile-top bg-primary p-2'>
              <img className='round-img my-1'
               src='' alt='' />
              <h1 className='large'>{name}</h1>
              <p className='lead'> 
                Father's Name {fatherName} 
              </p>
              <p className='lead'>
                {email} 
              </p>
              <p className='lead'>
                CNIC {cnic} 
              </p>
              <p className='lead'>
               Date of Birth {dateOfBirth} 
              </p>
              <p className='lead'>
                Nationality {Nationality} 
              </p>
              <p className='lead'>
                Domicile {domicile} 
              </p>
              <div className='icons my-1'>
       
                    {address && address.area && (
                     <p>Address <span> </span> {address.area} </p>
                    
                    )}
                    {address && address.city && (
                    <p>City <span> </span>{address.city} </p>
                    
                    )}
                    {address && address.District && (
                     <p>District  <span> </span>{address.District} </p>

                    )}
                   </div>
                        
            </div>
          );
        };
ProfileTop.propTypes = {
    profile:PropTypes.object.isRequired
}

export default ProfileTop
