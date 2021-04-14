import React, { useState } from "react";
import Activity from "./Activity";
import { useSelector } from 'react-redux';
import AddActivity from "./AddActivity";

const Workouts = () => {
  
  const entire = useSelector(state => state.activity);
  const [toggleAdd, setToggleAdd] = useState(false);
  //console.log(entire);


  const showList = (<div>
    <button onClick={() => setToggleAdd(true)} >Add activity</button>
    {entire.map(exerc => <Activity key={exerc.id} id={exerc.id} name={exerc.name} duration={exerc.duration} />)}
  </div>);


  return (
    <div className={"workouts-wrapper"}>
      <h2>My Workouts</h2>
      {toggleAdd ? <AddActivity fnToggle={setToggleAdd} /> : showList}
    </div>
  )
};

export default Workouts;