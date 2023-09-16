import { useState, useEffect } from "react"
const Dictionary = () => {
  const [word, setWord] = useState('');

  // Hàm này nhận vào 2 đối số hoặc 1 đối số đối số, đối số thứ 1 bắt buộc, đối số thứ 2 tùy chọn không bắt buộc
  useEffect(() => {
    console.log('State Updated', word) 
  }); // limit what state useEffect cares about --> dependency array 
        // giới hạn trạng thái mà useEffect quan tâm --> mảng phụ thuộc
  return (
    <div>
        <input type="text" onChange={(e) => {
            setWord(e.target.value);
        }} />
        <h1>Let is get the definition for {word}</h1>
    </div>
  )
}

export default Dictionary