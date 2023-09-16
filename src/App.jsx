// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/Editemployee";
import Header from "./components/header";
import Employees from "./pages/Employees";
import Customer from "./pages/Customer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";

function App() {
  return (
    // URL Parameters in Router -- Truyền params trên router - truyền tham số trên URL

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employess" element={<Employees />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/definition" element={<Definition />} />
          <Route path="/definition/:search" element={<Definition />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );

}

export default App
