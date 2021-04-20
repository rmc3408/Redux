import React from "react";
import { useDispatch } from 'react-redux';


const Activity = ({ id , name , duration }) => {

  const dispatch = useDispatch();

  const deleteExercise = () => {
    dispatch({
      type: "DELETE",
      payload: { id }
    })
  }

  return (
    <div className={"activity-wrapper"}>
      <p>Activity: {name}, Duration: {duration}</p>
      <button onClick={deleteExercise}>Delete</button>
    </div>
  )
};

export default Activity;