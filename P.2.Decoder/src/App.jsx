import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import './css/style.css';
import './charts/ChartjsConfig';

import MainPage from './pages/MainPage';
import Login from './pages/auth/Login';
import Loading from './partials/Loading';
import Signup from './pages/auth/Signup';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sessionStorage.getItem('token');
    setLoading(false);
  }, []);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden justify-center">
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          {sessionStorage.getItem('token')!=undefined ? (
            <Route path="/*" element={<MainPage />} />
          ) : (
            <Route path="/*" element={<Navigate to="/Login" replace />} />
          )}
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
