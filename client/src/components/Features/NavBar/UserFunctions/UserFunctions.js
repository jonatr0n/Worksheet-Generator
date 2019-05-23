const axios = require('../../../../../node_modules/axios');

export const register = newUser => {
    return axios.post('users/register', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(res => {
            console.log("Registered")
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios.post('users/login', {
            email: user.email,
            password: user.password
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            console.log(res.data); 
            //////////////////////////////////////////////////////////////////////
            /// res.data gives token. need to store in redux to do condtional renderin for sercure pages and content. Good luck, future kyle.
            return res.data
            
        })
        .catch(err => {
            console.log(err)
        })
}