"use client"
import { useState } from 'react';
import axios from 'axios';

const GiphySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);

  const handleSearch = async () => {
    try {
      const apiKey = 'VFmOZKkU9GaX9Mm0y7Lvuh6Dmb44HOMr';
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=5`
      );
      setGifs(response.data.data);
    } catch (error) {
      console.error('Error fetching Giphy data:', error);
    }
  };

  return (
   <div className="p-4">
      <input
        className="border p-2 rounded"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={handleSearch}
      >
        Search Giphy
      </button>
      <div className="mt-4">
        {gifs.map((gif) => (
          <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} className="m-2" />
        ))}
      </div>
    </div>
    
  );
};

export default GiphySearch;
