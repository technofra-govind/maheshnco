import "./App.css";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
