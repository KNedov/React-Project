import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import CreateProduct from './components/create-product/CreateProduct.jsx'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/create" element={<CreateProduct />} />
      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
