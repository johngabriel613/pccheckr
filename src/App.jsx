import { Route, Routes } from "react-router-dom";
import Layout from "./base/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import 'animate.css';
import Builder from "./pages/Builder";




function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="builder" element={<Builder/>}/>
      </Route>
    </Routes>
  )
}

export default App
