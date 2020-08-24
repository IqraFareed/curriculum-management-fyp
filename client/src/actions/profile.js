import axios from 'axios';
import {setAlert} from './alert';

import {
    GET_PROFILE, 
    PROFILE_ERROR,
    CLEAR_PROFILE,
    ACCOUNT_DELETED,
    GET_PROFILES
} from './types';

//Get current users profile
export const getCurrentProfile=() => async dispatch =>{
    try {
        
        const res = await axios.get('api/studentprofile/me');
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data 
        });
    } catch (err) {
       
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText, status: err.response.status}

        });
        
    }
}
// Get all profiles
export const getProfiles=() => async dispatch =>{
    dispatch({ type: CLEAR_PROFILE});
    
    try {
        
        const res = await axios.get('api/studentprofile');
        
        dispatch({
            type: GET_PROFILES,
            payload: res.data 
        });
    } catch (err) {
       
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText, status: err.response.status}

        });
        
    }
}
// Get profiles by ID
export const getProfileById= userId => async dispatch =>{
  
    
    try {
        
        const res = await axios.get(`/api/studentprofile/user/${userId}`);
        
        dispatch({
            type: GET_PROFILE,
            payload: res.data 
        });
    } catch (err) {
       
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText, status: err.response.status}

        });
        
    }
}
// create or update profile(Add info)
export const addInfo = (
    formData ,
     history , 
     edit = false)=> async dispatch=>{
    try{
        const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/studentprofile' , formData , config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data 
        });

        dispatch(setAlert(edit ? 'Information Updated': 'Information Added','success'));
        if(!edit){
            history.push('/dashboard');
        }
    }catch(err){
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg , 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText, status: err.response.status}

        });
    }
};

// Delete account and profile
export const deleteAccount = () => async dispatch =>{
    if(window.confirm('Are you sure you want to delete account?')){
        try {
           await axios.delete('/api/studentprofile');

            dispatch({type: CLEAR_PROFILE});
            dispatch({type: ACCOUNT_DELETED});

            dispatch(setAlert('This account has been delete permanantly'));

        } catch (err) {
            dispatch({
                type:PROFILE_ERROR,
                payload: {msg: err.response.statusText , status: err.response.status}
            });
        }
    }
    
}