import React from 'react';
import './App.css';

import UsersList from './components/UsersList';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-lg text-center">User's list</h1>
      <UsersList />
    </div>
  );
}

export default App;
