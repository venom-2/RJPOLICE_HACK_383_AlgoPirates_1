import Sab from './Sab'
import './App.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  

  const location = useLocation();
  const {state} = location;
    // Check if state exists and has an email property
    const name = state.state && state.state.name;
    console.log(name);
  return (
    <>
      {/* <h1>{state} Yahi h jo h</h1> */}
      <Sab name={name} />
    </>
  )
}

export default App
