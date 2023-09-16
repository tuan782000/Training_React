import { useState, useEffect } from "react"
const Dictionary = () => {
  const [word, setWord] = useState('');
  const [word2, setWord2] = useState('');

  // Hàm này nhận vào 2 đối số hoặc 1 đối số đối số, đối số thứ 1 bắt buộc, đối số thứ 2 tùy chọn không bắt buộc
//   useEffect(() => {
//     console.log('State Updated', word) 
//   }); 
        // limit what state useEffect cares about --> dependency array 
        // giới hạn trạng thái mà useEffect quan tâm --> mảng phụ thuộc

  // no dependency array -> update for any state change: 
  // empty dependency array -> execute once   
//   useEffect(() => {
//     console.log('State Updated', word + ' ' + word2); 
//   }, []); 

// useEffect loại 3: đối số số thứ 2 - nó phụ thuộc word đã truyền vào
// kích hoạt console.log chỉ khi nào word thay đổi thì mới cập nhật, kể cả word2 có thay đổi thì useEFfect ko kích hoạt
  useEffect(() => {
    console.log('State Updated', word + ' ' + word2); 
  }, [word]);


// passing in data --> only execute when those state variables are changed

  return (
    <div>
        <input type="text" onChange={(e) => {
            setWord(e.target.value);
        }} />
        <h2>Let is get the definition for {word}</h2>

        <input type="text" onChange={(e) => {
            setWord2(e.target.value);
        }} />
        <h2>Let is get the definition for {word2}</h2>
    </div>
  )
}

export default Dictionary