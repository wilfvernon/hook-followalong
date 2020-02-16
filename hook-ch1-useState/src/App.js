import React from 'react';
import './App.css';
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div className="app">
    <ProfileCard 
      image="https://i.pinimg.com/originals/90/b7/4a/90b74a7e4c21b08a4d6c8f0a8b29e466.jpg"
      name="Captain Hook"
    />
    </div>
  );
}

export default App;
