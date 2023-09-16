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
          <h1 className="bg-red-300">Hello World</h1>
          {/* Cái e là nội dung người dùng gõ - đưa vào làm đối cho hàm - onChange này Call back function */}
          <input type="text" onChange={(e) => {
            console.log(e.target.value)
            // Nhập giá trị vào ô input thì thực hiện callback đồng thời thực chức năng useState, setRole, cập nhật lại role ban đầu
            setRole(e.target.value) 
          }} />
          <Employee name="Tuan" role={role}/>
          <Employee name="Nguyen"  role="Intern"/>
          <Employee name="Thai" />
        </> 
        : 
        <p>You can not not see an employee</p>}
    </>
  )
}

export default App
