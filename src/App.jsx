// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/Editemployee";
import Header from "./components/header";
import Employees from "./pages/Employees";
import Customer from "./pages/Customer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./components/NotFound";

function App() {
  return (
    // Redirect with useNavigate Hook - Điều hướng với useNavigate Hook - ví dụ có thanh tìm kiếm search xong gõ enter điều hướng đến nơi khác

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employess" element={<Employees />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/dictionary" element={<Dictionary />} />
          {/* <Route path="/definition" element={<Definition />} /> */}
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );

}

export default App
