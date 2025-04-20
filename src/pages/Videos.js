import React from 'react';

function Videos() {
  return (
    <div className="videos">
  <h2 className="videos-title">Video Lectures</h2>
  <p className="videos-description">Select a course to watch video lectures.</p>
  
  <div className="video-list">
    <div className="video-card">
      <img src="images/video1.jpg" alt="Video 1" className="video-thumbnail" />
      <h3>Introduction to Programming</h3>
      <p>Learn the basics of programming with this introductory video.</p>
      <button className="watch-btn">Watch Now</button>
    </div>
    
    <div className="video-card">
      <img src="images/video2.jpg" alt="Video 2" className="video-thumbnail" />
      <h3>HTML & CSS Fundamentals</h3>
      <p>Understand the core concepts of HTML and CSS for web development.</p>
      <button className="watch-btn">Watch Now</button>
    </div>
    
    <div className="video-card">
      <img src="images/video3.jpg" alt="Video 3" className="video-thumbnail" />
      <h3>JavaScript Essentials</h3>
      <p>Master JavaScript fundamentals and start building interactive websites.</p>
      <button className="watch-btn">Watch Now</button>
    </div>
  </div>
</div>

  );
}

export default Videos;
