import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
              Edit <code>src/App.js</code> and save to reload.
        <p>Hola Mundo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <table>
    <thead>
        <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Celular</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>samuel</td>
            <td>andrade</td>
            <td>samuel.andrade@example.com</td>
            <td>123456789</td>
        </tr>
        <tr>
            <td>María</td>
            <td>Gómez</td>
            <td>maria.gomez@example.com</td>
            <td>987654321</td>
        </tr>
        <tr>
            <td>Camila</td>
            <td>hurtado</td>
            <td>camila.hurtado@example.com</td>
            <td>555666777</td>
        </tr>
    </tbody>
</table>


        
      </header>
    </div>
  );
}

export default App;
