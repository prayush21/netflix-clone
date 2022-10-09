import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {
      if(userAuth){
        console.log('logged in: userAuth', userAuth);
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
