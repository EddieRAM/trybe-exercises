    
    import React from 'react';
    import './App.css';

    const Task = (value) => {
      return (
        <li key={value}>{value}</li>
      );
    }

    const tasks = ['Read', 'Study', 'Code', 'Work'];

    class App extends React.Component {
      render() {
        return (
          <ul>{ tasks.map(task => Task(task)) }</ul>
        );
      }
    }

    export default App;