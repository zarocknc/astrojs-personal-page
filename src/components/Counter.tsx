import { JSX, createSignal } from "solid-js";

export default function Counter() {
    const [count, setCount] = createSignal(0);
    const add = () => setCount(count() + 1);
    const substract = () => setCount(count() - 1);
    return (
        <div>
            <button onClick={substract}> restar</button>
            <pre>{count()}</pre>
            <button onClick={add}>sumar</button>
        </div>
    )
}