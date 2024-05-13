import React, {useState,  useContext} from 'react'
import {container} from "./styles/form.module.css"
import { getUserData } from '../../data/main'
import { UserContext } from '../../context/userProvider'
const index = () => {
    const [userId, setUserId] = useState(1)
    const {setAvatar} = useContext(UserContext)
    const fetchData = async() => {
        const userData = await getUserData(userId)
        setAvatar(typeof(userData) == "string" ? userData : "")

    }
  return (
    <div className={container}>
        <input type='number' value={userId.toString()} onChange={(e) => setUserId(parseInt(e.target.value == "" ? "0": e.target.value))} min="1"/>
        <button onClick={() => fetchData()}>Buscar Usuario</button>
    </div>
  )
}

export default index