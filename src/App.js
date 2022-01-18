import logo from './logo.svg';
import './App.css';
import "./micss.css"
import Home from "./components/Home.js"
import { Routes, Route } from "react-router-dom";
function App() {
return (<div>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
