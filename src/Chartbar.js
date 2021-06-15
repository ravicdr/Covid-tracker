

import REACT,{useState,useEffect} from 'react'

import { Bar,Line,Pie } from 'react-chartjs-2'
//const mapbox_token="pk.eyJ1IjoicmF2aWNkciIsImEiOiJja255Nm1qNncxNmQ0Mm5sZzUxNmlnbmk3In0.W8M8yS2TVFyTVNgj14fWQQ"
//mapboxgl.accessToken = mapbox_token;
//var map = new mapboxgl.Map({
//container: 'map',
//style: 'mapbox://styles/mapbox/streets-v11'
//});
const Chartbar=()=>{
    let arr=[];
    let lb=[];
    let deatharr=[];
    let recarr=[];
    const [total,settotal]=useState("");
    const [ctr,setctr]=useState([]);
    const [dist,setdist]=useState([]);
    const getUsers=async()=>{
        const response=await fetch('https://api.covid19api.com/summary');
        const response2=await fetch('https://api.covid19india.org/data.json');
        const resJson =await response.json();
        const resjson2=await response2.json();
        setdist(resjson2.cases_time_series);
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
     
    }
    useEffect(()=>{
       getUsers(); 
    },[]);
    return(<>
    {
        !dist?(console.log("lko")):(
dist.map((currel)=>{
arr.push(currel.dailyconfirmed)
deatharr.push(currel.dailydeceased)
lb.push(currel.date)
recarr.push(currel.dailyrecovered);
})
            
           )
    }
  
    <Bar
        data={{

            labels:lb, //['Red', 'Blue', 'Yellow', 'Green', 'Purple','Red','lo','kl','kk'],
            datasets:[
                {
                    label:"# of Cases",
                    data:arr,
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.2)',
                       
               ],
                    borderColor:[
                        'rgba(255, 99, 132, 1)',
               
               ],
                    borderWidth:1,
                },
            ],
        }}
     height={100}
     width={400}

        options={{
              //  maintainAspectRatio:false,
            }}
    />
     <Bar
        data={{

            labels:lb, //['Red', 'Blue', 'Yellow', 'Green', 'Purple','Red','lo','kl','kk'],
            datasets:[
                {
                    label:"# of Deaths",
                    data:deatharr,
                    backgroundColor:[
                        'rgb(0,0,0,0.2)',
                       
               ],
                    borderColor:[
                        'rgb(0,0,0,1)',
               
               ],
                    borderWidth:1,
                },
            ],
        }}
     height={100}
     width={400}

        options={{
              //  maintainAspectRatio:false,
            }}
    />
    <Bar
        data={{

            labels:lb, //['Red', 'Blue', 'Yellow', 'Green', 'Purple','Red','lo','kl','kk'],
            datasets:[
                {
                    label:"# of Recovered",
                    data:recarr,
                    backgroundColor:[
                        '	rgb(0,128,0)',
                       
               ],
                    borderColor:[
                        '	rgb(0,128,0)',
               
               ],
                    borderWidth:1,
                },
            ],
        }}
     height={100}
     width={400}

        options={{
              //  maintainAspectRatio:false,
            }}
    />
    {console.log(arr)}
    </>)
}
export default Chartbar;