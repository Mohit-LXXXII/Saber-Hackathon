import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Layout from "./component/Layout"
import Hero from "./component/Outlet/Hero"


function App() {

  return (
    <BrowserRouter>

    <div className="flex flex-col justify-center bg-white min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Layout/>}>
    <Route path="" element={<Hero/>}/>
    <Route path="/about" element={<Hero/>}/>
    <Route path="/features" element={<Hero/>}/>
    <Route path="/pricing" element={<Hero/>}/>
    <Route path="/blog" element={<Hero/>}/>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
