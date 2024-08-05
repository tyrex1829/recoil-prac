import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  countAtom,
  //   decrementBy100Selector,
  //   decrementSelector,
  //   incrementBy100Selector,
  //   incrementSelector,
} from "../store/atoms/count";

function Counter() {
  const [count, setCount] = useRecoilState(countAtom);
  //   const increment = useRecoilValue(incrementSelector);
  //   const decrement = useRecoilValue(decrementSelector);
  //   const incrementBy100 = useRecoilValue(incrementBy100Selector);
  //   const decrementBy100 = useRecoilValue(decrementBy100Selector);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + 100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          setCount(count - 100);
        }}
      >
        -100
      </button>
    </div>
  );
}

export default Counter;
