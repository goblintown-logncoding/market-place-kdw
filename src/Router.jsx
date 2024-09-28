import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ShoppingCart from './pages/ShoppingCart';
import MyAppBar from './components/MyAppBar';
import ProductDetail from './pages/ProductDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyAppBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="product-detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
