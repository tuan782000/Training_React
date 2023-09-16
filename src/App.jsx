// import AddEmployee from "./components/AddEmployee";
// import EditEmployee from "./components/Editemployee";
import Header from "./components/header";
import Employees from "./pages/Employees";
import Customer from "./pages/Customer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from "./components/Dictionary";

function App() {
  return (
    // Intro to useEffect Hook - basic useEffect practice
    // Giới thiệu useEffect Hook - luyện tập cơ bản useEffect Hook
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employess" element={<Employees />} />
          <Route path="/customers" element={<Customer />} />
          <Route path="/dictionary" element={<Dictionary />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );

}

export default App
