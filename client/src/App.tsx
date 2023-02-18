import { useState, useEffect, useContext } from 'react';
import reactLogo from './assets/react.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCampuses from './Components/Campuses/allCampuses';
import AllStudents from './Components/Students/allStudents';
import NavBar from './Components/NavBar/navBar';
import './App.css';
import { Context } from './Context/ContextProvider';
import axios from 'axios';
import SingleStudent from './Components/Students/singleStudent';
import SingleCampus from './Components/Campuses/singleCampus';

function App() {
  const { setContext } = useContext(Context);

  useEffect(() => {
    async function fetchData() {
      const { data: students } = await axios.get('/api/students');
      const { data: campuses } = await axios.get('/api/campuses');
      setContext({ students, campuses });
    }
    fetchData();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllCampuses />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/students/:id" element={<SingleStudent />} />
        <Route path="/campuses/:id" element={<SingleCampus />} />
      </Routes>
    </Router>
  );
}

export default App;
