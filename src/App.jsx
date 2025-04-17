import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* example for ecomm */}
        {/* <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
}

export default App;