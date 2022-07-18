import React, { useEffect,useState } from 'react';
import {CircularProgress} from "@material-ui/core";
import './quiz.css';

function Quiz({name,score,questions,setQuestions,setScore}) {
const[currQues,setCurrQues] = useState(0)
const[options,setOptions]=useState()


useEffect(()=>{
  
setOptions(questions && 
  handleShuffle([
    questions[currQues]?.correct_answer,
    ...questions[currQues]?.incorrect_answers,
  ])
  );


},[currQues,questions]);

const handleShuffle=(optionss)=>{
  return optionss.sort(()=>Math.random()-0.5);



};



  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span>

      {
        questions ? (
        <>
        <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
        </>
        ): (
        <CircularProgress
        style={{margin:100}}
        color="inherit" 
        size={150}
        thickness={1}/>
      )}
    </div>
  )
}

export default Quiz