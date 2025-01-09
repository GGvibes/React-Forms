import './App.css'
import './components/Authenticate'
import Authenticate from './components/Authenticate'
import './components/SignUpForm'
import SignUpForm from './components/SignUpForm'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <Authenticate token={token} setToken={setToken}/>
        <SignUpForm token={token} setToken ={setToken} />
      </div>
    </>
  )
}

export default App
