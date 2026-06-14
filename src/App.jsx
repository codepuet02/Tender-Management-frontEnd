import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Tenders from "./pages/Tenders";
import Clients from "./pages/Clients";
import Providers from "./pages/Providers";
import Catalog from "./pages/Catalog";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/tenders" element={<Tenders />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
