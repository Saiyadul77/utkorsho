import React from 'react';
import useProgram from '../../hooks/useProgram';
import Programs from './Programs';

const Banner = () => {
    const [programs, setProgram]=useProgram({});
    return (
        <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1'>
            {
                programs.map(program=><Programs 
                key={program.id}
                program={program}
                ></Programs>)
            }
        </div>
    );
};

export default Banner;