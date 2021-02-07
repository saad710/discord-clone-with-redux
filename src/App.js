import React from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectUser} from "./features/counter/userSlice"
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { useEffect } from 'react';
import {auth} from "./firebase"
import {login , logout} from "./features/counter/userSlice"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser)
        if (authUser){
          //the user is logged in
         dispatch(login({
           uid: authUser.uid,
           photo: authUser.photoURL,
           email: authUser.email,
           displayName: authUser.displayName,
         }))
        } else{
          //the user is logged out
          dispatch(logout());
        }
    })
  } , [dispatch])
  return (
    <div className="App">
        {/* <h2>Lets buid a descord clone !!</h2> */}
        {user ? (
          <>
        <Sidebar/>
        <Chat/>
        </> ) : (
            <Login/>
        )}

    </div>
  );
}

export default App;
