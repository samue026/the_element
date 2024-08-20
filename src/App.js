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

        <h2>que es label</h2>
        <p>El Elemento HTML representa una etiqueta para un elemento en una interfaz de usuario. Este puede estar asociado con un control ya sea mediante la utilizacion del atributo for, o ubicando el control dentro del elemento label.

          En consecuencia, ¿qué es un label en programación?

          El control Label, es un nombre del control que en español se traduce como etiqueta y sirve principalmente, para mostrar información, como por ejemplo, exhibir un título, el nombre de una casilla, mostrar el tiempo y muchas otras cosas más.
          En consecuencia, ¿qué es un label o etiqueta?

          Resumen. El Elemento HTML representa una etiqueta para un elemento en una interfaz de usuario. Este puede estar asociado con un control ya sea mediante la utilizacion del atributo for, o ubicando el control dentro del elemento label. Tal control es llamado "el control etiquetado" del elemento label.
            En consecuencia, ¿qué es Autosize en programación?

            Autosize: Esta propiedad permite poner el label del tamaño exacto que ocupen las letras dentro del label, osea que aunque pongamos mas grande el tamaño del label, este se ajustara a lo que ocupen las letras que hayamos escrito dentro.</p>

          <h2>que es WebPack</h2>
          <p>Webpack es una herramienta de compilación que empaqueta todos los elementos de un proyecto de desarrollo en un archivo único Webpack crea un grafo de dependencias entre los módulos de código JavaScript, HTML, CSS, plantillas, imágenes, fuentes y otros archivos estáticos Webpack permite trabajar con una variedad de tecnologías web y optimizar el rendimiento de las aplicaciones</p>

          <h2>para que se usa en REACT</h2>
          <p>Desarrollo de redes sociales como Twitter, Facebook e Instagram.
            Crear feeds de actualización automática, sistemas de autenticación de usuarios, implementar comentarios y reacciones.
            Sistemas de gestión de ventas para tiendas en línea.
            Crear interfaces de usuario (UI) en aplicaciones móviles y web.
            Construir aplicaciones web complejas y de alto rendimiento.</p>
        </header>
        </div>
        );
    }
        export default App;