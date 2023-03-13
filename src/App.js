
import './App.css';
import { useState, React } from 'react';
import Todo from './todo';

function App() {

  const [currentValue, newValue] = useState(0)
  const [name, setName] = useState("Amit")


  //2.
  function count() {
    newValue(currentValue + 1)
  }
  function countreverse() {
    newValue(currentValue - 1)
  }

  //3.
  function handleButtonClick() {
    if (name === "Amit") {
      setName("Rajan");
    } else {
      setName("Amit");
    }
  }


  //
  return (
    <>
      <div className="App">
        
<Todo/>

        <h1 style={{ color: 'red' }} >{currentValue}</h1>
        <button onClick={count} >Increase count</button>
        <button onClick={countreverse} >Decrease count </button>

        <br />
        <br />
        <br />

        <h1>My name is {name}</h1>
        <button value={'Amit'} onClick={handleButtonClick} >Change name</button>
      </div>
    </>
  );
}


export default App;
