import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/home'
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
