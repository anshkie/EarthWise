import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Feed = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const params = useParams();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      const user = JSON.parse(auth);
      const userId = user._id;
      console.log(userId);
      getProfiles(userId);
    }
  }, []);

  const getProfiles = async (id) => {
    let result = await fetch(`http://localhost:9100/blocks/${id}`);
    result = await result.json();
    console.log(result);
    console.log(result._id);
    console.log(result.title);
    console.log(result.content);
    
    // Update state variables with fetched data
    setTitle(result.title);
    setContent(result.content);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Feed;
