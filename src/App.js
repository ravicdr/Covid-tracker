import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Covidapi from './Covidapi'
import Nav from './NavComp'
import Map from './Map'
import "leaflet/dist/leaflet.css";

function App() {
  const [mapCenter,setMapCenter]=useState({lat:34.80746,lng:-40.4790})
const [mapZoom,setMapZoom]=useState(3)

  return (<>
  <Nav/>
    <Covidapi/>
  <Map
    center={mapCenter}
    zoom={mapZoom}
  />
     <h1>Deepak</h1>
    </>
  );
}

export default App;
