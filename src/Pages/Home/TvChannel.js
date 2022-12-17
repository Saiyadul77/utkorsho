import React from 'react';

const TvChannel = () => {
    return (
        <div>
            <figure class="figure">
                <a href="https://durbinlive.com/live-tv/somoy-tv.html">
                    <img src="https://durbinlive.com/uploads/tv_image/somoy-tv.png" data-src="https://durbinlive.com/uploads/tv_image/somoy-tv.png" alt="Somoy TV" />
                    <figcaption>Somoy TV</figcaption>
                </a>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ORxX7AS4-Zg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </figure>

        </div>
    );
};

export default TvChannel;