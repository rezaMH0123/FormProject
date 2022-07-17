import './App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
