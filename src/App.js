import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fdx0nfz_0nR5-X3J5PC18FD7Q6I3s_C_YQ&usqp=CAU'></img>
      </header>
      <nav className='nav'>
        <div>Profile</div>
        <div>Messages</div>
      </nav>
      <div className='content'>Main content</div>
    </div>
  );
}

export default App;
