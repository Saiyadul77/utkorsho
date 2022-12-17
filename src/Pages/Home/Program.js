import React from 'react';
import { Link } from 'react-router-dom';


const Program = ({ program }) => {
    const { name, feature,img } = program;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{feature}</p>
                <Link to={`/programs`}>
                    <button className='btn btn-primary'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Program;