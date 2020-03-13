import { defaultauth,db } from './setup'

export function whatchUserChanges(callback) {
    const unsub = defaultauth.onAuthStateChanged(user => {
        if (user && !user.isAnonymous) {
            console.log('logged in ')
            callback({
                id:user.uid,
                email:user.email,
                displayName:user.displayName
            })
        }
        else {
            console.log('Not logged in ')
            callback(null)
        }
    })
    return unsub
} 

export function whatchExpensiveChanges(callback) {
    const unsub = db
    .collection('expenses')
    .onSnapshot((snapshot)=>{
        const docs =[]
        snapshot.forEach(doc=>{
            const data=doc.data()
            docs.push({
                ...data,
                id:doc.id
            })
        })
        callback(docs)
    })
    
    return unsub
} 

