import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img
          className="hero-image"
          src="images/hero-image.jpg"
          alt="Learning"
        />
        <div className="hero-text">
          <h2>Welcome to the E-Learning Platform</h2>
          <p>
            Unlock your potential with interactive courses, engaging video
            lectures, and personalized feedback to enhance your learning experience.
          </p>
          
          {/* Navigation to Courses Page */}
          <Link to="/courses">
            <button className="cta-btn">Explore Courses</button>
          </Link>
          <Link to="/signup">
            <button className="cta-btn">Get Started</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <img
            src="images/interactive-courses.jpg"
            alt="Interactive Courses"
            className="feature-image"
          />
          <h3>Interactive Courses</h3>
          <p>
            Explore a variety of courses designed by industry experts. Learn at your
            own pace with high-quality content.
          </p>
        </div>
        <div className="feature">
          <img
            src="images/video-lectures.jpg"
            alt="Video Lectures"
            className="feature-image"
          />
          <h3>Video Lectures</h3>
          <p>
            Watch video lectures and tutorials to enhance your understanding. Our
            video library is updated regularly.
          </p>
        </div>
        <div className="feature">
          <img
            src="images/feedback.jpg"
            alt="Student Feedback"
            className="feature-image"
          />
          <h3>Student Feedback</h3>
          <p>
            We value your feedback! Help us improve our courses and provide the best
            learning experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
