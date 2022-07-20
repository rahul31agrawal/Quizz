import React from 'react'
import NavBar from '../../components/Navbar/Navbar';
import "./Rules.css";

function Rules() {
  return (
    <>
        <NavBar/>
    <div className='rules'>
    <ol>
    <li> There will be total 5 questions</li>
        <li>
          You are given 4 options for each question, choose 1 option from given
          options.
        </li>
        <li> For each correct answer you will get 1 points</li>
        <li> No marks will be deducted for wrong answers</li>
        
        <li>
          For passing the quiz you have to give at-least answer 4 questions
          correctly
        </li>
        <li> You cannot skip any question</li>
      </ol>
    </div>
    </>
    
  )
}

export default Rules