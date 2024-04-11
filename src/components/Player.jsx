'use client'
import React from 'react';
import YoutubePlayer from 'react-player/youtube';
import '../app/globals.css';

const Reproductor = () => {
    return (
        <div className='contenedor-reproductor'>
            <YoutubePlayer
                url='https://www.youtube.com/watch?v=xlKMaVzolw0&list=RDd5oQ61Mj9gU&index=2'
                width='480px'
                height='360px'
                controls // Opcional: Incluye controles si lo deseas (reproducir/pausar)
            />
        </div>
    );
};

export default Reproductor;
