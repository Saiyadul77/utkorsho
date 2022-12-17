import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ classInfo }) => {
    const { name, description, img } = classInfo;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>*{description?.first}</p>
                <p>*{description?.second}</p>
                <p>*{description?.third}</p>
                <div class="card-actions justify-end">
                <Link to={`/programs`}>
                    <button className='btn btn-primary'>To Know more</button>
                </Link>
                <Link to={`/programs`}>
                    <button className='btn btn-primary'>Enroll Now</button>
                </Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;