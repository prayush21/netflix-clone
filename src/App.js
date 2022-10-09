import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Login from "./screens/LoginScreen";

function App() {
  const user = null;
  
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
