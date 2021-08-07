import React,{useEffect, useState} from 'react';
import {getQuestion,askQuestion} from '../api/index';

function Home(){
    const [userId, serUserId] = useState(null);
    const [data,setdata] = useState([])


    useEffect(()=>{
        const id =localStorage.getItem("userId");
        serUserId(id)
        console.log(id, 44)
    },[userId])

    useEffect(() => {
        async function getdata() {
            const res = await getQuestion();
            // console.log(res);
            setdata(res.msg);
        }
        getdata()
    }, []);

  const handleSubmit = async(e) => {
    // e.preventDefault();
      const id = userId;
      const Question = document.getElementById('inputquestion').value
      await askQuestion(id,Question)
      console.log(askQuestion)
  }

    return(
        <div>
        <h1>{userId}</h1>
        <form onSubmit={handleSubmit} className="form-horizontal">
        <input type="text" id="inputquestion" placeholder="Enter your Question"/>
        <button class= "btn btn-success" href="/" type="submit">Add Question</button> 
        </form>
        <ul>
            {data.map(ele => 
            <div>
            <li>Question:{ele.question}</li>
            <li>Answer:{ele.answer}</li>
            </div>

            )   }
        </ul>
        </div>
    );
}



export default Home