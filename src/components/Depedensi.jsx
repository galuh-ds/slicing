import { useEffect, useState } from "react";

function Depedensi() {
    const [number, setNumber] = useState(1);
    const [todo, setTodo] = useState('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
        .then((res) => res.json())
        .then((json) => setTodo(json.title));

    }, [number]);

    function prev() {
        setNumber((prev) => prev + 1);
    }

    return (
        <>
        <button className="border rounded-lg bg-green-500 w-24 h-14" onClick={prev}>Next Todo</button>
        <p>{todo}</p>
        </>
    );
}
export default Depedensi;