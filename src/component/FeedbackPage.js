import React, { useState } from 'react';
import Support from '../support.png';

function FeedbackPage() {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', { comment, rating });
    setComment('');
    setRating(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-screen-xl mx-auto p-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img className="h-auto w-full md:max-w-md" src={Support} alt="Support" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-2xl mb-4 text-green-700">Feedback Page</h1>
            <p className="mb-6 text-gray-600">Feel free to drop feedback!</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">Comment:</label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={handleCommentChange}
                  rows={4}
                  cols={50}
                  className="resize-none border rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>
              <div>
                <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">Rating:</label>
                <select
                  id="rating"
                  value={rating}
                  onChange={handleRatingChange}
                  className="border rounded-md w-full px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value={0}>Select a rating</option>
                  <option value={1}>⭐</option>
                  <option value={2}>⭐⭐</option>
                  <option value={3}>⭐⭐⭐</option>
                  <option value={4}>⭐⭐⭐⭐</option>
                  <option value={5}>⭐⭐⭐⭐⭐</option>
                </select>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Feedback</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackPage;
