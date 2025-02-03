import { useAtom } from "jotai";
import { doubleCountAtom } from "./state/atom";

const DoubleCountDisplay = () => {
  const [doubleCount] = useAtom(doubleCountAtom);
  return <div>Double Count:{doubleCount} </div>;
};

export default DoubleCountDisplay;
