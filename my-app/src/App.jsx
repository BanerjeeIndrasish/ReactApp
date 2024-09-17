import { useState, useEffect } from 'react'
import './App.css'
import { useSelector } from 'react-redux';
import Login from './MyComponents/Login';
import Home from './MyComponents/Home';
import Navbar from './MyComponents/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ResetPassword from './MyComponents/ResetPassword';

function App() {
  const amount = useSelector(state => state.amount);
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [userAuthentication, setUserAuthentication] = useState(false);

  useEffect(()=>{
    const token = localStorage.getItem("authToken");
    setUserAuthentication(!!token);
  }, [])
  const toggleMode = ()=>{
      if(mode === 'dark')
      {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Darkmode Disabled", "success");
      }        
      else  
      {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Darkmode Enabled", "success");
      }
    }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1600);
  }

  return (
    <>
      <Router>
          < Navbar title = "My Portal" mode={mode} toggleMode={toggleMode}/>
          <Routes>      
            <Route path='/login' element={!userAuthentication ? <Login isAuthentic={setUserAuthentication}/>:<Navigate to= "/home" />} /> 
            <Route path='/home' element={userAuthentication ? <Home /> : <Navigate to= "/login" />} />
            <Route path='/reset-password' element={<ResetPassword />} />
            <Route path="/" element={<Navigate to= "/login" />} />
          </Routes>
      </Router>
    </>
  )
}

{/* <Page title="Happy Tour"/>     */}
{/* <Learning /> */}
      {/* <Learning2 />       */}


export default App
