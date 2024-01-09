import Sab from './Sab'
import './User.css'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'

function App() {

  const location = useLocation();

  const {state} = location;
  
  const name = state.state && state.state.name;
  

  return (
    <>

      <Sab name = {name}/>
    </>
  )
}

export default App
