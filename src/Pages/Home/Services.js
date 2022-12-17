import React from 'react';
import usePrograms from '../../hooks/usePrograms';

import Service from './Service';

const Services = () => {
    const [classes, setClasses]=usePrograms({});

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {
                classes.map(classInfo=><Service key={classInfo._id}
                classInfo={classInfo}
                ></Service>)
            }
        </div>
    );
};

export default Services;