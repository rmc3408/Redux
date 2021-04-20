import React, { useState } from "react";
import { useDispatch } from 'react-redux';


const AddActivity = (props) => {
  
  const [exercise, setExercise] = useState({ name: "", duration: "" })
  const dispatch = useDispatch();

  const handleChange = (e) => {
    //e.persist();
    setExercise(st => ({ ...st, [e.target.name]: e.target.value }))
  }
  //console.log(exercise)

  const addExercise = () => {
    dispatch({
      type: "CREATE",
      payload: {
        name: exercise.name,
        duration: exercise.duration
      }
    });
    props.fnToggle(false);
  }

  return (
    <div className={"add"}>
      <div className="input-section">
        <p>Activity:</p>
        <input onChange={(e) => handleChange(e)}
          name={"name"}
          placeholder={"Activity Name..."} />
      </div>

      <div className="input-section">
        <p>Duration:</p>
        <input onChange={(e) => handleChange(e)}
          name={"duration"}
          placeholder={"Activity Name..."} />
      </div>

      <button onClick={addExercise} >Add Activity</button>
    </div>
  )
};

export default AddActivity;