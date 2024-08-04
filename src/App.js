import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { my_auth } from './firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(()=>{
    my_auth.onAuthStateChanged(userCredential =>{
      if(userCredential){
        dispatch(login({
            email: userCredential.email,
            uid: userCredential.uid,
            displayName: userCredential.displayName,
        }))

      }else{
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className='app'>
      <Header/>
      {!user ? (
        <Login/>
      ) : (
        
      <div className="app_body">
        
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      )}
      
    </div>
  );
}

export default App;
