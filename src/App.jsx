import Employee from "./components/Employee"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function App() {
  // Learn Array, Loop and map,...

  // Trong bài học được dùng map để clone ra 1 array, sau đó truyền toàn bộ dữ liệu trong array xuống cho thằng con
  const checkEmployee = true;

  // Tạo mảng nhân viên
  const [employees, setEmployees] = useState([
    { name: "Anh", role: "Developer", img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg" },
    { name: "Binh", role: "Manager", img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Thuy", role: "QA", img: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Tuyet", role: "Tester", img: "https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Ngoc", role: "Developer", img: "https://images.pexels.com/photos/1372137/pexels-photo-1372137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Thu", role: "Business analytics", img: "https://images.pexels.com/photos/1391494/pexels-photo-1391494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Xuan", role: "Graphic Design", img: "https://images.pexels.com/photos/3616937/pexels-photo-3616937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { name: "Nhi", role: "Accountant", img: "https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg" },
  ]);

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
              console.log(uuidv4());
              return (
                <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />
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
