    
import logo from './logo.svg';
import React from 'react';
import './App.css';

/* Crie uma lista de tarefas simples que:
Utilize a função Task dentro do componente App .
Leia as tarefas de dentro de um Array.
Use a função map para criar cada item da lista no HTML. */

const task = () => {
  const arrtasks = ['Read', 'Study', 'Code', 'Work'];
  return arrtasks.map(item => <li>{item}</li>)

}    

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Theese are my tasks
        </p>            
        <ul>{task()}</ul>            
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;