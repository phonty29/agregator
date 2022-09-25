import axios from 'axios';

export const register = async (data) => {
    try { 
        let response = await axios.post(`/api/v1/auth/registration/customer/new`, data);
        let user = response.data; 
        return user;		
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
        console.log(accessToken);
        let header = {
            "Authorization": `Bearer ${accessToken}`
        }
        let response = await axios.get(`http://188.225.83.80:6719//api/v1/restaurants/all`, header);
        let restaurants = response.data; 
        return restaurants;		
    } catch (error) {
        console.error(error);
    }
};