import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";

const Planets = ({mode}) => {
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const {id} = useParams();

  useEffect(() => {
    fetchPlanet();
  }, []);

  const fetchPlanet = async () => {
    setLoading(true);
    const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    setPlanet(response.data);
    setLoading(false);
  };

  if (loading) {
    return <CardSkeleton mode={mode} />
  }

  if (!planet) {
    return <p>No Planet found</p>;
  }

  return (
    <div key={planet?.name} className={` rounded shadow-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 ${mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}>
            <h2 className={`text-2xl font-bold mb-2 ${mode === 'dark' ? 'text-white' : ''}`}>{planet?.name}</h2>
            <p className={`mb-2 ${mode === 'dark' ? 'text-white' : ''}`}>Climate: {planet?.climate}</p>
            <p className={`mb-2 ${mode === 'dark' ? 'text-white' : ''}`}>Population: {planet?.population}</p>
            <p className={`mb-2 ${mode === 'dark' ? 'text-white' : ''}`}>Terrain: {planet?.terrain}</p>
            <h3 className={`text-xl font-bold mb-2 ${mode === 'dark' ? 'text-white' : ''}`}>Residents</h3>
            <div className='flex gap-2 flex-wrap'>
              {planet?.residents?.map((residentUrl,index) => {
                const resident = residentUrl.split('/').filter(Boolean).pop();
                return (
                  <div key={resident}>
                    <Link to={`/residents/${resident}`} className={`text-blue-500 hover:text-blue-700 ${mode === 'dark' ? 'text-blue-400 hover:text-blue-500' : ''}`}>{resident}</Link>
                    {planet?.residents?.length > index+1 && <span> ,</span>}
                  </div>
                );
              })}
            </div>
          </div>
  );
};

export default Planets;