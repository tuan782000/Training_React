import Employee from "./components/Employee"
import { useState } from "react";
function App() {
  // Update Parent Component State in Child Component  - Cập nhật state component cha bằng component child
  // Nguyên lý dùng callback
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

  // function updateEmployee(id, newName, newRole) {
  //   const updateEmployees = employees.map((employee) => {
  //     if(id === employee.id){
  //       // retrun new

  //       return {...employee, name: newName, role: newRole}
  //     }
  //     return employee
  //   });
  //   setEmployees(updateEmployees);
  // }

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  return (
    <>
      {checkEmployee ?
        <>
          {/* <input type="text" onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }} /> */}
          <div className="flex flex-wrap justify-center">
            {/* dùng hàm map để lập, để thêm id cho từng employee thì sử dụng thư viện uuidv4 */}
            {employees.map(employee => {
              console.log(employee);
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
        :
        <p>You can not not see an employee</p>}
    </>
  )
}

export default App
