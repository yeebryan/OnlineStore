import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";
import Navbar from './Components/Navbar';
import Main from './Pages/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
