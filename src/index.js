import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HikeList from './Components/HikeList/HikeList';
import HikeDetail from './Components/HikeDetail/HikeDetail';
import About from './Components/About/About';

import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HikeList />} />
        <Route path="/hikes/:id" element={<HikeDetail />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
