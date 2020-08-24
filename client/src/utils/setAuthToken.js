import axios from 'axios';

/// to set global header in x-auth-token
const setAuthToken = token =>{
    if(token){
        axios.defaults.headers.common['x-auth-token']= token;
    } else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;