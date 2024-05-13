import axios from "axios"

export const getUserData = async(userID = 1) => {
    try{
        const fetch = await axios.get(`https://reqres.in/api/users/${userID}`)
        return fetch.data.data.avatar
    }catch(e){
        return e.response.status
    }
}