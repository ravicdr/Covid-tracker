import REACT,{useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chartbar from './Chartbar'
import {Accordion,Card,Button} from 'react-bootstrap'

const Covidapi=()=>{
  let arr=[];
    const [total,settotal]=useState("");
    const [ctr,setctr]=useState([]);
    const [dist,setdist]=useState([]);
    const getUsers=async()=>{
        const response=await fetch('https://api.covid19api.com/summary');
        const response2=await fetch('https://api.covid19india.org/data.json');
        const resJson =await response.json();
        const resjson2=await response2.json();
        setdist(resjson2.statewise);
      //  console.log(dist);
//var data=(resjson2.statewise);
//console.log(data[0])
        settotal(resJson.Global)
        //console.log(total)
        setctr(resJson.Countries)
      //// setarnews(await response.articles.json());
        //console.log(resJson);
       // setnews(resJson)
     //  console.log(ctr[0]);
      //  setnews(resJson.articles)
     
    };
    const renderAccordion=(dist,index)=>{
     
     return(
     
     
      <Accordion  Key={index}>
               

            
         <Accordion.Toggle  eventKey={dist}>

        
      {<>
        <table class="table">
      <tbody className="tabl">
      <tr>
<th scope="row">{dist.state}</th>

<td>{dist.confirmed} <br/>{dist.deltaconfirmed}</td>
      <td>{dist.active}</td>
      <td>{dist.recovered}<br/>{dist.deltarecovered}</td>
      <td>{dist.deaths}<br/>{dist.deltadeaths}</td>
    </tr>
    </tbody>
</table>
</>}
  
 
 <Accordion.Collapse eventKey={dist}>
         <Card.Body>

     <h1>NO DATA FOUND !!</h1>
         </Card.Body>
       </Accordion.Collapse>
</Accordion.Toggle>
 
   
   </Accordion>
 
   )
    
   
    }
    useEffect(()=>{
       getUsers(); 
    },[]);
return(<>
<Chartbar/>
{
  dist.map(renderAccordion)
}
<div className="chartd">

</div>
{
  !dist?(console.log("lko")):(
  
<>


<table class="table">
  <thead>
    <tr>
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Active</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
    
    </tr>
  </thead>
  <tbody className="tabl">

{
  dist.map((currel) => {
    arr.push(currel.confirmed);
        return(
<>
<tr>
<th scope="row">{currel.state}</th>

<td>{currel.confirmed} <br/>{currel.deltaconfirmed}</td>
      <td>{currel.active}</td>
      <td>{currel.recovered}<br/>{currel.deltarecovered}</td>
      <td>{currel.deaths}<br/>{currel.deltadeaths}</td>
    </tr>
    
</>
        )
        })
}
  </tbody>
</table>


</>
  )
}

<h1>in covid api</h1>

<button type="button" class="btn btn-primary">Primary</button>

</>)
}
export default Covidapi;
/*
<div className="container-fluid mt-5" id="cardhead">
    <div className="row text-center">
  
<div className="col-10 col-md-4 mt-5" >
<div className="card" >
  <div className="card-body">
  <h4 className="card-subtitle mb-2 text-muted" id="confid">Confirmed</h4>
    <h3 className="card-title"id="tconfid">{dist[1].confirmed}</h3>
    <h6 className="card-subtitle mb-2 text-muted" id="newconfid">↑ { dist[1].deltaconfirmed}</h6>
   
  </div>
</div>
</div>

<div className="col-10 col-md-4 mt-5">
<div className="card" >
  <div className="card-body">
  <h4 className="card-subtitle mb-2 text-muted">Total Deaths</h4>
    <h3 className="card-title">{dist[1].deaths}</h3>
    <h6 className="card-subtitle mb-2 text-muted">{dist[1].deltadeaths}</h6>
    
  </div></div>
</div>

<div className="col-10 col-md-4 mt-5">
<div className="card" >
  <div className="card-body">
  <h4 className="card-subtitle mb-2 text-muted">Total Recovered</h4>
    <h3 className="card-title">{total.TotalRecovered}</h3>
    <h6 className="card-subtitle mb-2 text-muted">{total.NewRecovered}</h6>
   
  </div>
</div>
</div>
</div>
</div>*/