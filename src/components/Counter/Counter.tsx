import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
    const [count, setCount] = createSignal(0);
    const add = () => setCount(count() + 1);
    const substract = () => setCount(count() - 1);
    return (
        <div class="caja">
            <button class="btn btn-sm" onClick={substract}> restar</button>
            <span class="badge">{count()}</span>
            <button class="btn btn-sm" onClick={add}>sumar</button>
        </div>
    )
}
