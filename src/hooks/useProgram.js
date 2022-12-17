import React, { useEffect, useState } from 'react';

const useProgram = () => {
    const [programs, setProgram] = useState([]);

    useEffect(() => {
        const url= "program.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setProgram(data));
    }, []);
    return [programs, setProgram];
};

export default useProgram;