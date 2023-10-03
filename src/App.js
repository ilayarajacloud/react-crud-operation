import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';


function App() {

  const [getValue, setGetValue] = useState('')
  const [getLastValue, setGetLastValue] = useState('')
  const changeValue = (val) => {
    setGetValue(val)
  }

  const clear1=(e)=>{
    setGetValue('')
  }

  const onClear2=(e)=>{
    setGetLastValue('')
  }
  const secondChangeValue=(val)=>{
    setGetLastValue(val)
  }

  return (
    <div className="App">
      <header className="App-header">
        <UserInput 
        changeValue={changeValue} 
        secondChangeValue={secondChangeValue}
        clear1={clear1}
        clear2={onClear2}
         />
        <h2>{getValue} {getLastValue}</h2>
      </header>
    </div>
  );
}

export default App;
