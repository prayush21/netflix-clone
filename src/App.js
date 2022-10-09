import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useDispatch, useSelector} from 'react-redux';
import { login, selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if(userAuth){
        console.log('logged in: userAuth', userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //logged out
      }
    })

    return unsubscribe;
  }, []);
  
  return (
    <div className="app">
      {!user ? <Login/> : <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}/>
            
          
        </Routes>
      </Router>}

      
    </div>
  );
}

export default App;
