import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Users from './features/getUsers/UsersList';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App;
