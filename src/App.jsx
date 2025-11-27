import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import CreateProduct from './components/create-product/CreateProduct.jsx'
import Catalog from './components/catalog/Catalog.jsx'
import MyProducts from './components/my-products/MyProducts.jsx'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/my-products" element={<MyProducts />} />
      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
