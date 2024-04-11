'use client'
import React, { useState, useEffect } from 'react';
import connectDB from "@/libs/mongodn";
import axios from 'axios'; // Importar axios

const SongEz = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      await connectDB();
      const response = await axios.get('/api/songs'); // Realizar la solicitud a la API
      setSongs(response.data);
    };

    fetchSongs();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Canciones</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="text-left">Canción</th>
            <th className="text-left">Autor</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4">{song.song}</td>
              <td className="py-2 px-4">{song.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongEz;
