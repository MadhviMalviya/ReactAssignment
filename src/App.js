import logo from './logo.svg';
import './App.css';
import TodoWrapper from './components/todoWrapper';
import TodoForm from './components/todoForm';
import { useState } from 'react';
import Todo from './components/todo';

function App() {

  const [value, setValue] = useState('')
  const [item, setItem] = useState([])


  function handleChange(e) {
    const newTask = e.target.value
    setValue(newTask)
  }

  function list() {
    setItem((olditems) => {
      return [...olditems, value]

    })
  }

  return (
    <div className="App">

      <h1>TASK TO-DO  </h1>

      <input type={'text'} onChange={handleChange}></input>

      <button type='submit' onClick={list}>Add</button>

      <ul>
        {item.map((val) => {
          return <li>{val}
          </li>

        }
        )}
      </ul>


    </div>
  );
}

export default App;
