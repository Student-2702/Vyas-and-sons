
import Home from "./components/Home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import Contact from "./components/Home/Contact";
import Products from "./components/Home/Products";



function App() {
  return (

    <>


      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/'>

            <Route path='/' element={<Home />} />

          </Route>
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/product" element={<Products />} />
        </Routes>


        <Footer />
      </BrowserRouter>



    </>

  )
}

export default App
