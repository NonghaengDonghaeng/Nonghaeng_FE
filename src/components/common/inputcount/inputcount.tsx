import { inputType } from "@/types/eventtype";

type PropsType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<any>>;
};

export default function InputCount({ count, setCount }: PropsType) {
  function countChange(e: inputType) {
    setCount(e.target.value);
  }

  return (
    <div>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          } else alert("사람수가 0이하");
        }}
      >
        -
      </button>
      <input onChange={countChange} value={count}></input>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
