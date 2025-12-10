import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";

const position = [23.685, 90.356];
const Map = () => {
  const district = useLoaderData();
  const mapRef = useRef(null)
  const handle = (e)=>{
    e.preventDefault();
    const search = e.target.search.value;
   // console.log(search)
    const location = district.find(c => c.district.toLowerCase().includes(search.toLowerCase()))
    console.log(location)
    if(location){
      const searchArea = [location.lat , location.lag]
      mapRef.current.flyTo(searchArea, 14);
    }
  }
  return (
    <div className="w-11/12 mx-auto my-10 ">
      <h1 className="text-2xl md:text-4xl font-bold text-white ">
        We Provide Our Services in 64 districts
      </h1>
      <p className="text-gray-400 my-5"></p>
      <div>
       <form onSubmit ={handle}>
         <label className="input my-4 ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name="search" required placeholder="Enter District Name" />
</label>
  <button className=" btn " type="submit">search</button>

       </form>
      </div>

      <div className="w-full h-[800px] border-2">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className=" h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {district.map((section , index) => (
            <Marker key={index} position={[section.lat, section.lag]}>
              <Popup>
               <strong> {section.district} </strong> <br /> {section.zones.join(', ')}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};


export default Map;