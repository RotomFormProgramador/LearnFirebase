import  {db}  from './setup'

export  async function createExpense(data){
    return await db
    .collection('expenses')
    .doc()
    .set(data)
}


export  async function deleteExpense(id){
    return await db
    .collection('expenses')
    .doc('pvM8FeT8ijfTNZ0H4QgE')
    .delete()
}

export  async function updateExpense(id,data){
    return await db
    .collection('expenses')
    .doc(id)
    .update(data)
}
