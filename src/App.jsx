import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import ProductList from './admin/products/ProductList';
import CreateProduct from './admin/products/CreateProduct';
import EditProduct from './admin/products/EditProduct';
import DeleteProduct from './admin/products/DeleteProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/products/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/delete/:id" element={<DeleteProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
