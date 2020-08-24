import React, {Fragment , useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfileById, getCurrentProfile} from '../../actions/profile';
import {Link} from 'react-router-dom';
import ProfileTop from './ProfileTop';
import EarlyEducation from './EarlyEducation';
import TertiaryEducation from './TertiaryEducation';
const Profile = ({
    getProfileById,
    profile:{profile,loading},
    auth,
    match}) => {
    useEffect(()=>{
        getProfileById(match.params.id);
    },[getProfileById , match.params.id]);
    return (
        <Fragment>
            {profile === null || loading ?(
            <span>loading..</span>
            ):(
            <Fragment>
                <Link to="/profiles" className="btn btn-light">
                    Back To student's list
                </Link>
                {auth.isAuthenticated &&
                    auth.loading === false &&
                    auth.user._id === profile.user._id && (
                    <Link to="/edit-profile" className="btn btn-dark">
                        Edit Profile
              </Link>
            )}
            <div class ="profile-grid my-1">
            <ProfileTop profile={profile} />
            <EarlyEducation profile={profile} />
            <TertiaryEducation profile={profile} />
           
            </div>
            </Fragment>
            )}
        </Fragment>
    );
};

Profile.propTypes = {
 getProfileById:PropTypes.func.isRequired,
 profile : PropTypes.object.isRequired,
 auth: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, {getProfileById})(Profile);
