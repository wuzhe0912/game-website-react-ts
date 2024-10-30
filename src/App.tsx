import { createSignal } from 'solid-js';

function App() {
    const [count, setCount] = createSignal(0);

    return (
        <div>
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
}

export default App;
