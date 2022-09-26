import axios from 'axios';

export const register = async (data) => {
    try { 
        let response = await axios.post(`/api/v1/auth/registration/customer/new`, data, {headers: {"Content-Type": "application/json"}});
        let {tokens} = response.data; 
        return tokens;		
    } catch (error) {
        console.error(error);
    }
};

export const login = async (data) => {
    try { 
        let response = await axios.post(`/api/v1/auth/login`, data);
        let {tokens} = response.data; 
        return tokens;		
    } catch (error) {
        console.error(error);
    }
};

export const getRestaurants = async (accessToken) => {
    try { 
        let response = await axios.get('/api/v1/restaurants/all', {headers: {'Authorization': `token ${accessToken}`}});
        let {count, restaurants} = response.data; 
        return {count, restaurants};		
    } catch (error) {
        console.error(error);
    }
};