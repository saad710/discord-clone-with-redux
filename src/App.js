import React from 'react';

import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
        {/* <h2>Lets buid a descord clone !!</h2> */}
        <Sidebar/>
        <Chat/>
        
    </div>
  );
}

export default App;
