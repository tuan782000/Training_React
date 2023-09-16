/* eslint-disable react/prop-types */
const Employee = (props) => {
  return (
    // Một chút lưu ý: Để chạy code JS bên trong cần có cặp ngoặc nhọn bao bọc {code js in here }
    // Nếu truyền có thì hứng, không có thì thui không hiển thị
    <>
      <div>Name employee is {props.name}</div>
      {/* có thể viết như này */}
      <p>{props.role ? props.name : "No Role"}</p>
      {/* Hoặc */}
      {props.role ? <p className="role">{props.role}</p> : <p className="noRole">No role</p>}
    </>

  )
}

export default Employee