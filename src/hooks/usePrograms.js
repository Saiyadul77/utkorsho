import React, { useEffect, useState } from 'react';

const usePrograms = () => {
    const [classes, setClasses]=useState([]);

    useEffect(()=>{
        // const url=`https://utkorsho-server-production.up.railway.app/program`;
        fetch("programs.json")
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return [classes, setClasses];
};

export default usePrograms;