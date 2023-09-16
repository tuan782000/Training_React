// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/Editemployee";
import Header from "./components/header";
import Employees from "./pages/Employees";
import Customer from "./pages/Customer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    // Our Header 
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employess" element={<Employees />} />
          <Route path="/customers" element={<Customer />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );

}

export default App
