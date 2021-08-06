// const mongo = require('mongodb');
const {studentQuestionDB} = require('../database/db')

async function add({name,password,loginId}){
    const db = await studentQuestionDB();
    const studentQues = db.collection("studentQuestion");
    try {
        const student = await studentQues.find({loginId}).toArray();
        if(student || student.length) {
            return "member Already exists with this loginId"
        }
        await studentQues.insertOne({name,password,loginId})
        console.log(studentQues)
        return {name,password,loginId};
    }
    catch (err) {
        return "Error"
    }
}

async function checkUser(loginId, password){
    const db = await studentQuestionDB();
    const studentQues = db.collection("studentQuestion");
    try{
        const result = await studentQues.find({loginId,password}).toArray();
        if(result.length === 0) return null;
        const userId = result[0]["_id"]
        return userId;
    }
    catch(err){
        console.log(err)
        throw new Error('Something is broken!!')
    }
}


module.exports = {add,checkUser}