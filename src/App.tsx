import { useAtom } from "jotai";
import "./App.css";
import Counter from "./Counter";
import { countAtom } from "./state/atom";

function App() {
  const [count] = useAtom(countAtom);

  return (
    <div className="app">
      <div>Count: {count}</div>
      <Counter />
    </div>
  );
}

export default App;
