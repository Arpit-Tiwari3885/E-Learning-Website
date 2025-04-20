import React from 'react';

function Feedback() {
  return (
    <div className="feedback">
      <h2>Feedback</h2>
      <label htmlFor="teacher">Rate the Teaching:</label>
      <input type="text" id="teacher" placeholder="Enter teacher's name" />
      <textarea placeholder="Provide your feedback here"></textarea>
      <button>Submit</button>
    </div>
  );
}

export default Feedback;
