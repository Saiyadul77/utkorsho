import React, { useEffect, useState } from 'react';

const useProgram = () => {
    const [programs, setProgram] = useState([]);

    useEffect(() => {
        fetch('program.json')
            .then(res => res.json())
            .then(data => setProgram(data));
    }, []);
    return [programs, setProgram];
};

export default useProgram;