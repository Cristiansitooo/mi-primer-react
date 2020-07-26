import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
          TAKELIBRARY

        </p>
       <div class="contenedor_tabla" > </div>
       <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Correos</th>
      <th scope="col">Celular</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Cristian Camilo</th>
      <td>Orozco Usuga</td>
      <td>cristianorozco@inemjose.edu.co</td>
      <td>301 398 1894</td>
    </tr>
    <tr>
      <th scope="row">Wilmer Mauricio</th>
      <td>Gómez Ruiz</td>
      <td>wilmergomez@inemjose.edu.co</td>
      <td>300 321 5181</td>
    </tr>
    <tr>
      <th scope="row">Juan Miguel</th>
      <td> Contreras Zapata </td>
      <td>juancontreras@inemjose.edu.co</td>
      <td>350 857 6049</td>
    </tr>
    <tr>
      <th scope="row">Valery</th>
      <td> Restrepo Zapara </td>
      <td>valeryrestrepo@inemjose.edu.co</td>
      <td>320 592 4155</td>
    </tr>
  </tbody>
</table>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
