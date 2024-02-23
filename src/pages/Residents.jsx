import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CardSkeleton from "../components/CardSkeleton";

const Residents = ({mode}) => {
  const [resident, setResident] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const {id} = useParams();

  useEffect(() => {
    fetchResident();
  }, []);

  const fetchResident = async () => {
    setLoading(true);
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    setResident(response.data);
    setLoading(false);
  };

  if (loading) {
    return <CardSkeleton mode={mode} />
  }

  if (!resident) {
    return <p>No resident found</p>;
  }

  return (
    <div className={`${mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'} rounded shadow-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 sm:mx-10 mx-2`}>
      <h2 className="text-2xl font-bold mb-2">{resident?.name}</h2>
      <p className="mb-2">Height: {resident?.height}</p>
      <p className="mb-2">Mass: {resident?.mass}</p>
      <p className="mb-2">Gender: {resident?.gender}</p>
      <h3 className="text-xl font-bold mb-2">Homeworld</h3>
      <Link to={`/planets/${resident.homeworld.split("/")[5]}`} className={`text-blue-500 hover:text-blue-700 ${mode === 'dark' ? 'text-blue-400 hover:text-blue-500' : ''}`} >
        {resident?.homeworld?.split("/")[4]}-{resident?.homeworld?.split("/")[5]}
      </Link>
    </div>
  );
};

export default Residents;