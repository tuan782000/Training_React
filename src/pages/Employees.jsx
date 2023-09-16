import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/Editemployee";
import Employee from "../components/Employee"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import Header from "../components/header";

function Employees() {
  // Pages and props.children
  const checkEmployee = true;

  const [employees, setEmployees] = useState([
    { id: 1, name: "Anh", role: "Developer", img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg" },
    { id: 2, name: "Binh", role: "Manager", img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Thuy", role: "QA", img: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Tuyet", role: "Tester", img: "https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Ngoc", role: "Developer", img: "https://images.pexels.com/photos/1372137/pexels-photo-1372137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Thu", role: "Business analytics", img: "https://images.pexels.com/photos/1391494/pexels-photo-1391494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Xuan", role: "Graphic Design", img: "https://images.pexels.com/photos/3616937/pexels-photo-3616937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, name: "Nhi", role: "Accountant", img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg" },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  return (
    <div className="App bg-gray-300 min-h-screen">
      {checkEmployee ?
        <>
          <div className="flex flex-wrap justify-center my-2">
            {employees.map(employee => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              )
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>

          <AddEmployee newEmployee={newEmployee} />

        </>
        :
        <p>You can not not see an employee</p>}
    </div>
  )
}

export default Employees
