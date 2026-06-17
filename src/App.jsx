import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/dashboard/index";
import Tenders from "./pages/Tenders/index";
import Clients from "./pages/Clients/index";
import Providers from "./pages/Providers/index";
import Catalog from "./pages/Catalog/index";
import Products from "./pages/Products/index";
import TenderDetail from "./pages/Tenders/TenderDetail";

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
          <Route path="tenders/:id" element={<TenderDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
