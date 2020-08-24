import React, {Fragment , useEffect} from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import AddInfo from './components/profile-forms/AddInfo';
import EditProfile from './components/profile-forms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
// Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';
//only check the first time that user loads 
if(localStorage.token){
 setAuthToken(localStorage.token);
}
 
const App=() =>{
  
  useEffect(()=>{
   store.dispatch(loadUser());
 //only run once
  },[]);
return(
<Provider store ={store}>
  <Router>
    <Fragment>
        <Navbar/>
        <Route exact path='/' component={Landing}/>
        <section className="container">
          <Alert/>
          <Switch>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/profiles' component={Profiles}/>
              <Route exact path='/profile/:id' component={Profile}/>
              <PrivateRoute exact path='/dashboard' component={Dashboard}/>
              <PrivateRoute exact path='/add-information' component={AddInfo}/>
              <PrivateRoute exact path='/edit-profile' component={EditProfile}/>
              
          </Switch>
        </section>
    </Fragment>
  </Router>
  </Provider>
)};
export default App;
