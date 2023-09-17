import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition() {
    // Sử dụng cả 2 cách điều hướng lỗi
    // useState
    // useNavigate
    const [word, setWord] = useState();
    const navigate = useNavigate();

    const [notFound, setNotFound] = useState(false);

    const [error, setError] = useState(false);

    console.log(useParams());
    let { search } = useParams();

    useEffect(() => {
        // const url = 'https://ádljdsksldfkefdlsmcalsk.com';
        // Các lỗi server đầu mã thường là 500
        // const url = 'https://httpstat.us/500';
        // const url = 'https://httpstat.us/501'; 
        //...
        // Các lỗi phía máy khách client
        // Đầu 400
        // const url = 'https://httpstat.us/404'; ... 
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => {
                console.log(response.status);

                if (response.status === 404) {
                    setNotFound(true);
                } else if (response.status === 401) {
                    navigate('/login');
                } else if (response.status === 500){
                    setError(true);
                }

                // Nếu các lỗi không xác định ném vào đây
                if(!response.ok) {
                    setError (true);
                    throw new Error("Some thing went wrong");
                }

                return response.json()
            })
            .then((data) => {
                setWord(data[0].meanings);
                // console.log(data[0].meanings);
            })
            .catch((e) => {
                console.log(e.message);
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
    if(error === true) {
        return (
            <>
                <p>Some thing went wrong, Try again?</p>
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
                    <p>Search again:</p>
                    <DefinitionSearch />
                </>)
                : <p>loading...</p>}
        </>
    );
}