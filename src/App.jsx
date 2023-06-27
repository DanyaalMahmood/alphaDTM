import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import About from "./components/About";
import Why from "./components/Why";
import Contact from "./components/Contact";
import './App.css';
import ScrollToTop from "./components/ScrolltoTop";

function App() {

  return (
    <>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>} />
            <Route path="why" element={<Why/>}/>
            <Route path="contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
