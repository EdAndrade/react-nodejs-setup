import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css'; 

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    
    const dataFromBack = async () => {
      const response = await fetch("/data")
      setData(await response.json())
    }
    dataFromBack()

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data && data.map( res => {
          return <p key={res.id}> {res.msg}</p>
        })}
      </header>
    </div>
  );
}

export default App;
