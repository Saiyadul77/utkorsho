import React from 'react';
import useProgram from '../../hooks/useProgram';
import Program from './Program';


const Programs = () => {
    const [programs, setProgram] = useProgram({});
    return (
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1'>
            {
                programs.map(program => <Program
                    key={program._id}
                    program={program}
                ></Program>)
            }
        </div>
    );
};

export default Programs;