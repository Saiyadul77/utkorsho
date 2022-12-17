import React, { useEffect, useState } from 'react';

const useSingleProgram = (programId) => {
    const [programs, setPrograms]= useState([]);
    useEffect(()=>{
        const url=`https://utkorsho-server-production.up.railway.app/programs/${programId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=> setPrograms(data));
    },{programId})
    return [programs];
};

export default useSingleProgram;