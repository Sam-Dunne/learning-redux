import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Views/Home';
import Counter from './Views/Counter';
import Footer from './components/Footer';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
