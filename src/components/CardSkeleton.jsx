import React from 'react';

const CardSkeleton = ({mode}) => {
  return (
    <div className={`${mode === 'dark' ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-lg p-4`}>
      <div className={`h-6 ${mode === 'dark' ? 'bg-gray-500' : 'bg-gray-300'} rounded w-full mb-4`}></div>
      <div className={`h-4 ${mode === 'dark' ? 'bg-gray-500' : 'bg-gray-300'} rounded w-1/2 mb-4`}></div>
      <div className={`h-4 ${mode === 'dark' ? 'bg-gray-500' : 'bg-gray-300'} rounded w-3/4 mb-4`}></div>
      <div className={`h-4 ${mode === 'dark' ? 'bg-gray-500' : 'bg-gray-300'} rounded w-full mb-4`}></div>
      <div className={`h-6 ${mode === 'dark' ? 'bg-gray-500' : 'bg-gray-300'} rounded w-full mb-4`}></div>
    </div>
  );
};

export default CardSkeleton;