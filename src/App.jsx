
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main className="flex h-[calc(100vh-(8rem))]">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
