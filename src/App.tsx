import React from 'react';
import icon from './mada_icon1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header flex flex-col justify-center bg-main py-8 h-screen">
        <img src={icon} className="App-logo w-48 h-48 mx-auto my-8" alt="logo" />
        <p className='py-6 text-2xl tracking-wide'>
          MADAGASKARHAUS
        </p>

        <div>
        <p className="App-link py-6">
          Das Informations- und Reisezentrum für Madagaskar
        </p>
        <p>
          2023
        </p>
      </div>
      </header>


    </div>
  );
}

export default App;
