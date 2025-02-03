import { useAtom } from "jotai";
import "./App.css";
import Counter from "./Counter";
import { countAtom } from "./state/atom";
import DoubleCountDisplay from "./DoubleCountDisplay";

function App() {
  const [count] = useAtom(countAtom);

  return (
    <div className="app">
      <div>Count: {count}</div>
      <Counter />
      <div>-------------------</div>
      <DoubleCountDisplay />
    </div>
  );
}

export default App;
