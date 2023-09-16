import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Definition() {
    const [word, setWord] = useState();

    // Luôn luôn chạy 1 lần, bất kể cái gì có xảy ra. Sau khi chạy lấy được kết quả. sau đó dùng setWord để cập nhật lại word
    // word ban đầu được set là rỗng
    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/helicopter')
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings);
            });
    }, []);

    return (
        <>
            <h1>Here is a definition:</h1>
            {/* sau khi có word check điều kiện conditional nếu không có hiện loading */}
            {/* Nếu có chạy vào trong bên trong, dùng map clone ra thành meaning truyền vào và in ra thông tin */}
            {word
                ? word.map((meaning) => {
                      return (
                          <p key={uuidv4()}>
                              {meaning.partOfSpeech + ': '}
                              {meaning.definitions[0].definition}
                          </p>
                      );
                  })
                : <p>loading...</p>}
        </>
    );
}