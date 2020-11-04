import React, {useState, useEffect} from 'react';
import DTPicker from './DTPicker'; 
import "./App.css"; 

function App() {

  const [startDate, setStartDate] = useState({
    date : "2020-07-19", 
    epocDate : Date.parse("2020-07-19")
  })
  const [endDate, setEndDate] = useState({
    date :"2020-10-19", 
    epocDate : Date.parse("2020-10-19")
  })

  const[renderStartDate, setRenerStartDate] = useState(startDate.epocDate); 
  const [renderEndDate, setRenderEndDate] = useState(endDate.epocDate); 

  


  const handleEndDateChange = (e) =>{
    console.log("End Date Changed to : " + e.target.value); 
    setEndDate({
      date: e.target.value, 
      epocDate: Date.parse(e.target.value)
    })
  }

  
  const handleStartDateChange = (e) =>{
    console.log("Start date changed to : " +e.target.value); 
    setStartDate({
      date: e.target.value, 
      epocDate: Date.parse(e.target.value)
    })
  }

  const handleUpdate = ()=>{
    setRenerStartDate(startDate.epocDate);
    setRenderEndDate(endDate.epocDate); 
  }

  return (
    <div>
      <img src="https://www.hawaii.edu/wp/wp-content/uploads/2016/05/header_oneline.png" className="uhlogo"></img>
      <div className="DateSection">
      
        <DTPicker label="Start Date" className="dateComponent" onChange ={handleStartDateChange} value={startDate.date} ></DTPicker>
        <DTPicker label="End Date" className="dateComponent" onChange ={handleEndDateChange} value={endDate.date}></DTPicker>
        <button type="button" className="updateBtn" onClick={handleUpdate}>UPDATE</button>
      </div>
      <hr/>
      <div className="content">
      <iframe src={"https://portal.netsage.global/grafana/d-solo/WNn1qyaiz/flows-by-science-discipline?orgId=2&var-Sensors=All&var-discipline=MPS.Astronomy&var-country_scope=All&from="+renderStartDate+"&to="+renderEndDate+"&panelId=7"} width="100%" height="800" frameborder="0"></iframe>
      <iframe src={"https://portal.netsage.global/grafana/d-solo/WNn1qyaiz/flows-by-science-discipline?orgId=2&var-Sensors=All&var-discipline=MPS.Astronomy&var-country_scope=All&from="+renderStartDate+"&to="+renderEndDate+"&panelId=9"} width="100%" height="1400" frameborder="0"></iframe> 
      <h4>Top Flows Sent by University of Hawaii</h4>
      <iframe src={"https://portal.netsage.global/grafana/d-solo/QfzDJKhik/flow-data-per-organization?orgId=2&var-Sensors=All&var-Organization=University%20of%20Hawaii&var-country_scope=All&from="+renderStartDate+"&to="+renderEndDate+"&panelId=21"} width="100%" height="500" frameborder="0"></iframe> 
      <h4>Top Flows Sent to University of Hawaii</h4>
      <iframe src={"https://portal.netsage.global/grafana/d-solo/QfzDJKhik/flow-data-per-organization?orgId=2&var-Sensors=All&var-Organization=University%20of%20Hawaii&var-country_scope=All&from="+renderStartDate+"&to="+renderEndDate+"&panelId=32"} width="100%" height="500" frameborder="0"></iframe>
      </div>
    
    
    </div>
    
  );
}

export default App;
