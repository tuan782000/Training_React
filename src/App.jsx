import Employee from "./components/Employee"
function App() {
  // Học về prop: truyền dữ liệu từ cha xuống con
  // Bước 1: Mình sẽ xác định cha là ai và con là ai.
  // Bước 2: đặt con props ngay lúc khai hàm ban đầu của component đó
  // Bước 3: từ cha truyền xuống dữ liệu cho con
  // Bước 4: Quay lại con hiển thị thông tin đó ra props.ten_da_truyen_tu_cha
  const checkEmployee = true;
  return (
    <>
      {checkEmployee ? 
        <>
          <h1>Hello World</h1>
          <Employee name="Tuan" role="Manager"/>
          <Employee name="Nguyen"  role="Intern"/>
          <Employee name="Thai" />
        </> 
        : 
        <p>You can not not see an employee</p>}
    </>
  )
}

export default App
