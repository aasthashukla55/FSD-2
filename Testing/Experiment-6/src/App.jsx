import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Home from './pages/Home';


const About = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/About')), 3000);
  });
});

const Dashboard = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/Dashboard')), 3000);
  });
});


const RouteLoader = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
   
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, [location]);

  if (loading) return <Loading />;
  return children;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/about" 
              element={<RouteLoader><About /></RouteLoader>} 
            />
            <Route 
              path="/dashboard" 
              element={<RouteLoader><Dashboard /></RouteLoader>} 
            />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;