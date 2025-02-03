import { useAtom } from "jotai";
import { countAtom } from "./state/atom";

const Counter = () => {
  const [, setCount] = useAtom(countAtom);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
};

export default Counter;
