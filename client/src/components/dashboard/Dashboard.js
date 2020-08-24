import React, { useEffect, Fragment } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import DashboardActions from './DashboardActions';




const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile }
  }) => {
    useEffect(() => {
      getCurrentProfile();
    }, [getCurrentProfile]);
  
    return (
      <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <Fragment>
            <DashboardActions/>
            <div className="my-2">
              <button className="btn btn-danger" onClick={() => deleteAccount()}>
                <i className="fas fa-user-minus"></i> Delete My Account
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
             <p>This student does not has a profile </p>
             <Link to='/add-information' className="btn btn-primary my-1">
                 Add information
            </Link> 
          </Fragment>
        )}
      </Fragment>
    );
  };

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStatetoProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStatetoProps,
   { getCurrentProfile, deleteAccount })
   (Dashboard);
