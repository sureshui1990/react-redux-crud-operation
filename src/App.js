import React, { useState} from 'react';
import './App.css';

function App() {

  const [age,setAge] = useState(20);
  return (
    <div className="App">
      <header className="App-header">
      
      <div><input type='text' value={age} /></div>
      <div>{age}</div>
      <button type='button' onClick={()=>setAge(age+4)}>Change age</button>
       </header>
    </div>
  );
}

export default App;

