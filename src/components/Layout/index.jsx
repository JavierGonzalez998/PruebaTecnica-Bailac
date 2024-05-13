import React, {useEffect, useState, useContext} from 'react'
import {main, formContainer, dataContainer, img, transition} from "./styles/main.module.css"
import Form from "../Form"
import { UserContext } from '../../context/userProvider'
const index = () => {
  const [avatarImg, setAvatarImg] = useState("")
  const {avatar} = useContext(UserContext)
  const  [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setAvatarImg(typeof(avatar) !== "undefined" ? avatar : "")
      setLoading(false)
    }, 500)
  },[avatar])
  return (
    <section className={main}>
        <h2>Buscador de persona</h2>
        <div className={formContainer}>
          <p>Ingrese un número para buscar:</p>
          <Form/>
        </div>
        <div className={dataContainer}>
          <div>
            {avatar == "" ? <p>Ingrese un Id de Usuario</p> : <img className={`${img} ${loading ? transition : ''}`} src={avatarImg} alt='imageProfile'></img>}
          </div>
        </div>
    </section>
  )
}

export default index