import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
// useNavigate của react-router-dom
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';

export default function Definition() {
    const [word, setWord] = useState();
    // Cách 1: sử dụng navigate
    // const navigate = useNavigate();
    // Cách 2: sử dụng useState kèm với option Link
    const [notFound, setNotFound] = useState(false);
    console.log(useParams());
    let { search } = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                // log ra trạng thái sau khi gọi api
                console.log(response.status);

                // Kiểm tra nếu 404 điều hướng tới trang khác
                if (response.status === 404) {
                    // navigate('/404');
                    setNotFound(true);
                }

                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings);
                // console.log(data[0].meanings);
            });
    }, []);

    if(notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        )
    }

    return (
        <>
            {word
                ? (<>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                </>)
                : <p>loading...</p>}
        </>
    );
}