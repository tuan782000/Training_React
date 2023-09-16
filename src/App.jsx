import Employee from "./components/Employee"
import { useState } from "react";
function App() {
  // Learn useState Hook and Events
  // Phần này quan trọng.
  const checkEmployee = true;
  // let role = "Manager";
  const [role, setRole] = useState("Manager"); // giá trị ban đầu set cho nó là Manager
  return (
    <>
      {checkEmployee ?
        <>
          {/* Cái e là nội dung người dùng gõ - đưa vào làm đối cho hàm - onChange này Call back function */}
          <input type="text" onChange={(e) => {
            console.log(e.target.value)
            // Nhập giá trị vào ô input thì thực hiện callback đồng thời thực chức năng useState, setRole, cập nhật lại role ban đầu
            setRole(e.target.value)
          }} />
          <div className="flex flex-wrap justify-center">
            <Employee name="Anh" role={role} img="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg" />
            <Employee name="Binh" role="Intern" img="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee name="Thuy" img="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Employee name="Tuyet" role={role} img="https://images.pexels.com/photos/1391495/pexels-photo-1391495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <Employee name="Nguyen" role="Intern" img="https://images.pexels.com/photos/1372137/pexels-photo-1372137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee name="Thai" img="https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee name="Tuan" role={role} img="https://images.pexels.com/photos/1391494/pexels-photo-1391494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee name="Nguyen" role="Intern" img="https://images.pexels.com/photos/1382730/pexels-photo-1382730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Employee name="Thai" img="https://images.pexels.com/photos/3616937/pexels-photo-3616937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </div>
        </>
        :
        <p>You can not not see an employee</p>}
    </>
  )
}

export default App
