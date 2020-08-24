import React,{Fragment , useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProfiles} from '../../actions/profile';
import ProfileItem from './ProfileItem';

const Profiles=({getProfiles , profile:{profiles , loading}})=> {
    useEffect(()=>{
        getProfiles();
    },[getProfiles]);
return <Fragment>{
    <Fragment>
        <h1 className="large text-primary">Students</h1>
        <div className="profiles">
            {profiles.length > 0 ?(
               profiles.map(profile =>
                (<ProfileItem key={profile._id} profile={profile}/>))
            ) : <h4>No profiles found...</h4>}
        </div>
    </Fragment>
    }</Fragment>
}

Profiles.propTypes = {
 getProfiles: PropTypes.func.isRequired,
 profile : PropTypes.object.isRequired
}
const mapStateToProps= state =>({
    profile: state.profile
});
export default connect(mapStateToProps ,{getProfiles})(Profiles);

