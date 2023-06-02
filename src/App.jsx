import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import RegPage from "./components/RegPage/RegPage";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";




function App() {
  const [user, setUser] = useState('');
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {user.name ? <NavBar /> : null}

      <Routes>
        <Route path="/" element={ <MainPage user={user} /> } />
        <Route path="/reg" element={ <RegPage setUser={setUser} /> }/>
        <Route path="/projects" element={ <Projects /> }/>
        <Route path="/about" element={ <About /> }/>
      </Routes>

    </div>
  );
}

export default App;
