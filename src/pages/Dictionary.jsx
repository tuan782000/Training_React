import { useState } from "react"
import { useNavigate } from "react-router-dom";
const Dictionary = () => {

  // Redirect with useNavigate Hook - làm tìm kiến nhấn enter điều hướng sang trang definition

  // công cụ để triển khai word mà người dùng nhập
  const [word, setWord] = useState('');
  // công cụ để điều hướng
  const navigate = useNavigate()


  return (
    <div>
      {/* khi người dùng nhập kích hoạt sự kiện và set lại word */}
      <input type="text" onChange={(e) => {
        setWord(e.target.value);
      }} />
      {/* sau đó nhấn vào button kích hoạt sự và điều hướng sang trang Definition và kèm theo word người dùng đã gõ ở ô input */}
      <button onClick={() => {
        navigate('/definition/' + word)
      }}>Search</button>
      {/* Nhiệm vụ tìm kiếm thông tin trang Definition đó sẽ đảm nhận */}
    </div>
  )
}

export default Dictionary