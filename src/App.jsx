
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ProductCart from './components/productCart'

import AdminPage from './pages/adminPage'
import HomePage from './pages/homePage'
import LoginPage from './pages/loginPage'
import TestPage from './pages/test';
import { Toaster } from 'react-hot-toast';


function App() {
  

  return (
    <BrowserRouter>
       <div className="w-full h-screen ">
         <Toaster position="top-right" />
         <Routes>
             <Route path="/*" element={<HomePage />} />
             <Route path="/login" element={<LoginPage/>} /> 
             <Route path="/admin/*" element={<AdminPage />} />
             <Route path="/test" element={<TestPage/>} />
         </Routes>
       </div>
    </BrowserRouter>
  )
}

export default App
