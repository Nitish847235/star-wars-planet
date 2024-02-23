import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardSkeleton from '../components/CardSkeleton';

const Home = ({mode}) => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    setLoading(true);
    const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
    setPlanets(response?.data?.results);
    setNextPage(response?.data?.next);
    setPrevPage(response?.data?.previous);
    setLoading(false);
  };

  const fetchNextPage = async () => {
    setLoading(true);
    const response = await axios.get(nextPage);
    setPlanets(response?.data?.results);
    setNextPage(response?.data?.next);
    setPrevPage(response?.data?.previous);
    setLoading(false);
  };

  const fetchPrevPage = async () => {
    setLoading(true);
    const response = await axios.get(prevPage);
    setPlanets(response?.data?.results);
    setNextPage(response?.data?.next);
    setPrevPage(response?.data?.previous);
    setLoading(false);
  };

  let arr = [0,1,2,3,4,5,6,7,8,9];

  return (
    <div className={`container mx-auto px-4 ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
      
      <h1 className={`text-4xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : ''}`}>Planets Directory</h1>
      {!loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {planets.map(planet => (
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
        ))}
      </div>}
      {!loading && <div className='w-full flex items-center justify-between py-4'>
        <button onClick={fetchPrevPage} disabled={(!prevPage || prevPage === null)? true: false} className={` ${(!prevPage || prevPage === null)? "bg-slate-500 cursor-not-allowed":"bg-blue-500 hover:bg-blue-700"}  text-white font-bold py-2 px-4 rounded`}>
          Prev Page
        </button>
        <button onClick={fetchNextPage} disabled={(!nextPage || nextPage === null)? true: false} className={` ${(!nextPage || nextPage === null)? "bg-slate-500 cursor-not-allowed":"bg-blue-500 hover:bg-blue-700"}  text-white font-bold py-2 px-4 rounded`}>
          Next Page
        </button>
    </div>}
      {loading && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {arr.map((val)=>(
            <CardSkeleton key={val} mode={mode} />
        ))}
    </div>}
    </div>
  );
};

export default Home;