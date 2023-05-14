import type { RootState } from "../../app/store"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice"

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

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
