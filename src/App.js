import React from 'react';
import { BrowserRouter as Router, Route, useLocation, Routes } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Add = () => {
  const query = useQuery();
  const x = Number(query.get('x'));
  const y = Number(query.get('y'));
  return <h2>{x + y}</h2>
}

const Subtract = () => {
  const query = useQuery();
  const x = Number(query.get('x'));
  const y = Number(query.get('y'));
  return <h2>{x - y}</h2>
}

const Multiply = () => {
  const query = useQuery();
  const x = Number(query.get('x'));
  const y = Number(query.get('y'));
  return <h2>{x * y}</h2>
}

const Divide = () => {
  const query = useQuery();
  const x = Number(query.get('x'));
  const y = Number(query.get('y'));
  return <h2>{x / y}</h2>
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/sub" element={<Subtract />} />
        <Route path="/mul" element={<Multiply />} />
        <Route path="/div" element={<Divide />} />
      </Routes>
    </Router>
  );
}

export default App;
