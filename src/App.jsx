
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Fao from './components/Fao';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className="flex h-[calc(100vh-(8rem))]">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/fao" element={<Fao />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
