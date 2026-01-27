import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Packages';
import International from './pages/International';

const Homepage = lazy(() => import("./pages/HomePage"));

const Layout = () => (
  <>
    <Navbar />
    <main className="min-h-screen">
      <Outlet /> 
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/packages' element={<Pricing />} />
             <Route path='/international' element={<International/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
