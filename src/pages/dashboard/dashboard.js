import React,{useContext} from 'react'
import {AuthContext} from '../../context/auth'

export default  function  Dashboard (){
     const contextAuth =  useContext(AuthContext)
     console.log(contextAuth)
    return (
        <div className="Dashboard">
        El email es {contextAuth.user.email}
         </div>
        )
}

