// AddBlock.js

import React, { useState } from 'react';

const AddBlock = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9100/blocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content })
      });
      const data = await response.json();
      console.log('Block added:', data);
      // Redirect or handle success message
    } catch (error) {
      console.error('Error adding block:', error);
      // Handle error message
    }
  };

  return (
    <div className="min-h-screen bg-green-100 flex justify-center items-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Add Blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full border border-gray-300 rounded-md p-2"></textarea>
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">Add Block</button>
        </form>
      </div>
    </div>
  );
};

export default AddBlock;
