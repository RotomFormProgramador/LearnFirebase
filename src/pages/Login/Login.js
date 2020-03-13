import React, { useEffect } from 'react'
import  {startFirebaseUI} from '../../services/setup'

export default function Login(){
    useEffect(()=>{startFirebaseUI('#Login')},[])
    return(
        <div id="Login"/>        
    )
}