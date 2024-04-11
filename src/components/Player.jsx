'use client'
import React from 'react';
import YoutubePlayer from 'react-player/youtube';
import '../app/globals.css';


canciones = [
    {
        cancion: "The boy",
        url: "https://www.youtube.com/watch?v=3iJQ_mX0bno&list=RD3iJQ_mX0bno&start_radio=1"
    },
    {
        cancion:"Black Market",
        url:"https://www.youtube.com/watch?v=xlKMaVzolw0&list=RD3iJQ_mX0bno&index=2"
    },
    {
        cancion:"2nd Jewel",
        url:"https://www.youtube.com/watch?v=G8KkcPpqYPs&list=RD3iJQ_mX0bno&index=3"
    },
    {
        cancion:"Back for more",
        url:"https://www.youtube.com/watch?v=lM8YW58iwSM&list=RD3iJQ_mX0bno&index=4"
    },
    {
        cancion:"",
        url:""
    },
    {
        cancion:"",
        url:""
    },

    {
        cancion:"",
        url:""
    },
    {
        cancion:"",
        url:""
    },
    {
        cancion:"",
        url:""
    },
    {
        cancion:"",
        url:""
    },
    {
        cancion:"",
        url:""
    },
    {
        cancion:"",
        url:""
    }, 
    {
        cancion:"",
        url:""
    }, 
    {
        cancion:"",
        url:""
    },


]

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
