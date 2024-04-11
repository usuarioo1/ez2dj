import React from 'react'

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1712536159/ahfppljek0tu5uiyws7i.jpg" className=" w-96 max-w-sm rounded-lg shadow-2xl mt-10" />
                <div className='mx-20 mt-9'>
                    <h1 className="text-5xl font-bold  text-white">Ez2dj SONGS</h1>
                    <p className=" text-4xl text-white py-6">Sitio web creado para homenajear a este gran juego de arcade que tantas alegrías y buenos temas me entregó.</p>
                    <button className="btn btn-success w-60 h-20 text-3xl">Songs</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
