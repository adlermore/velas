import React from "react";
import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventPage/:id" element={<EventPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
