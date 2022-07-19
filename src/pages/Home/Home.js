import React from "react";
import "./Home.css";
import heroImage from "../../assets/quizhome.jpg";
import { MenuItem, TextField, Button } from "@material-ui/core";
import Categories from "../../../src/Data/Categories";
import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import ErrorAlert from "../../components/errorMessage/errorAlert";
import { useNavigate } from 'react-router-dom';

function Home({name,setName,fetchQuestions}) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const handleSubmit= () =>{
    if(!category || !difficulty || !name){
        setError(true);
        return;
    }else{
        setError(false);
        fetchQuestions(category,difficulty);
       
        navigate('/quiz');
    }

  }

  return (
    <>
     <NavBar />
    <div className="content">
      <div className="settings">
        <span className="settingsHeading">Quiz Settings</span>

        <div className="settings__select">
            {
                error && <ErrorAlert> Please fill all the details</ErrorAlert>
            }
          <TextField
            className="nameInput"
            label="Enter your name"
            variant="outlined"
            onChange={(e) =>setName(e.target.value)}
          />

          <TextField
            className="nameInput"
            select
            label="Select Category"
            variant="outlined"
            onChange={(e) =>setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            className="nameInput"
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large"
          onClick={handleSubmit}
          >Start Quiz</Button>
        </div>
      </div>

      <img src={heroImage} alt="hero banner" className="banner" />
    </div>
    </>
  );
}

export default Home;
