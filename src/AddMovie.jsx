import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    year: '',
    synopsis: '',
    posterUrl: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Movie Added! (Functionality not implemented yet)');
    navigate('/');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Movie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" onChange={handleChange} className="block w-full border p-2" required />
        <input type="text" name="director" placeholder="Director" onChange={handleChange} className="block w-full border p-2" required />
        <select name="genre" onChange={handleChange} className="block w-full border p-2" required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <input type="number" name="year" placeholder="Release Year" onChange={handleChange} className="block w-full border p-2" required />
        <textarea name="synopsis" placeholder="Synopsis" onChange={handleChange} className="block w-full border p-2" required></textarea>
        <input type="url" name="posterUrl" placeholder="Poster Image URL" onChange={handleChange} className="block w-full border p-2" />
        <div className="flex gap-4">
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
          <button type="button" onClick={() => navigate('/')} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
