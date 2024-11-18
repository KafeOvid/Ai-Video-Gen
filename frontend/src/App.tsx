import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Components
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Feature from './Components/Feature';
import VideoGenerator from './Components/VideoGenerator';
import AboutUs from './Components/About';
import Footer from './Components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route with Hero, Dashboard, Features, About, and Footer */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <Dashboard />
              <div id="feature">
                  <Feature />
              </div>
              <div id="about">
                <AboutUs />
              </div>            
              <div id="footer">
                <Footer />
              </div>
            </>
          } 
        />

        {/* Video Generator Route */}
        <Route 
          path="/video-generator" 
          element={
            <>
              <Header />
              <VideoGenerator />
              <Footer />
            </>
          } 
        />

        {/* Catch-all Route for 404 */}
        <Route 
          path="*" 
          element={
            <div style={{ textAlign: 'center', padding: '50px' }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
              <a href="/" style={{ textDecoration: 'none', color: '#007bff' }}>
                Go Back to Home
              </a>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
