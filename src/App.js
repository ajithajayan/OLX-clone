import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import {Routes, Route,useNavigate } from 'react-router-dom'
import { AuthContext, FirebaseContext,Post} from './store/FirebaseContext';

function App() {
  const navigate =useNavigate ()
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>̥̥
      
        <Post>
          
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/create' element={<Create />} />
          <Route path='/view' element={<View />} />
        </Routes>
        </Post>
      
    </div>
  );
}

export default App;