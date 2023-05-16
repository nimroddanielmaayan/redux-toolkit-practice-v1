import type { RootState } from "../../app/store"
import { decrement, increment, incrementByAmount } from "./counterSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
        <br />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span> {count} </span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(-5))}>
          Decrement by 5
        </button>
      </div>
    </div>
  )
}

export default Counter
