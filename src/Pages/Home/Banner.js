import React from 'react';

const Banner = () => {
    return (
        <div class="m-10 card lg:card-side bg-primary text-white shadow-xl">
            <figure><img src="https://i.ibb.co/KW53YMg/banner.png" alt="Album"/></figure>
            <div class="card-body">
                <h2 class="card-title mb-5 text-2xl">Academic, Admission, Model Test, Computer Course</h2>
                <h2 class="card-title mb-5">Online/ Offline Utkorsho is Best.</h2>
                <p>Click the button for Details</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-accent">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;