
import React from 'react';
import './App.css'; 

function App(props) {
    const handleChange = (e)=>{
        props.onChange(e);
    }
  return (
    <div>
        <span className="label">{props.label}</span>
        <input className="dateComponent" type="date"  onChange={(e)=>handleChange(e)} value={props.value}></input>
    </div>
  );
}

export default App;
