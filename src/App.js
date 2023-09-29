import { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput';


function App() {

  const [getValue, setGetValue] = useState('')
  const changeValue = (val) => {
    setGetValue(val)
  }

  const clear=(e)=>{
    setGetValue('')
  }

  return (
    <div className="App">
      <header className="App-header">
        <UserInput changeValue={changeValue} clear={clear} />
        <h2>{getValue}</h2>
      </header>
    </div>
  );
}

export default App;
