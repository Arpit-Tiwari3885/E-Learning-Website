import React from 'react';

function Courses() {
  return (
<div className="courses">
  <h2 className="courses-title">Available Courses</h2>
  <div className="course-list">
    <div className="course-card">
      <img src="images/course1.jpg" alt="Course 1" className="course-image" />
      <h3>Core Java</h3>
      <p>Learn the basics of programming with this introductory course.</p>
      <button className="enroll-btn">Enroll Now</button>
    </div>
    <div className="course-card">
      <img src="images/course2.jpg" alt="Course 2" className="course-image" />
      <h3>Python Programming</h3>
      <p>Master web development with HTML, CSS, and JavaScript.</p>
      <button className="enroll-btn">Enroll Now</button>
    </div>
    <div className="course-card">
      <img src="images/course3.jpg" alt="Course 3" className="course-image" />
      <h3>C++ Programming</h3>
      <p>Advanced data structures and algorithms for efficient coding.</p>
      <button className="enroll-btn">Enroll Now</button>
    </div>
  </div>
</div>

  );
}

export default Courses;
