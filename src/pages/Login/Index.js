import React, { useEffect } from 'react'
import { starUI } from '../../services/firebase'


export default function Login (){
    useEffect(()=>{starUI('#firebaseui')}
    ,[])
    return (
        <div id='firebaseui'></div>
    )
}

