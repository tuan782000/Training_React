import Employee from "./components/Employee"
function App() {
  // Thử code logic js trong này
  console.log("We are about to list the employee");
  // Giải thích: cho biến lưu giá trị true or false, 
  const checkEmployee = true;
  return (
    // dùng toán tử 3 ngôi check nếu true thì in ra nguyên cụm fragments <></> còn false in ra <p>
    <>
      {checkEmployee ? 
        <>
          <h1>Hello World</h1>
          <Employee />
          <Employee />
          <Employee />
        </> 
        : 
        <p>You can not not see an employee</p>}
    </>
  )
}

export default App
