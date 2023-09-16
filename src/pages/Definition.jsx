import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Definition() {
    const [word, setWord] = useState();

    console.log(useParams());
    // Sử dụng useParams
    let { search } = useParams();

    useEffect(() => {
        // Thay vì set cứng thì giờ gọi useParams được gán vào search để ở đây
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings);
                // console.log(data[0].meanings);
            });
    }, []);

    return (
        <>
            <h1>Here is a definition:</h1>
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