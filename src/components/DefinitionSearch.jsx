import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DefinitionSearch = () => {

    const [word, setWord] = useState('');
    const navigate = useNavigate()


    return (
        <form
            className="flex space-between space-x-2 max-w-[300px]"
            onSubmit={() => {
                navigate('/dictionary/' + word);
            }}
        >
            <input
                type="text"
                className="shrink min-w-0 px-2 py-1 rounded"
                placeholder="Enter your word"
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-1 px-2 rounded">Search</button>
        </form>
    )
}

export default DefinitionSearch