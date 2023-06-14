import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../features/counterSlice';
import { RootState } from '../../store';

export default function RTK() {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);

  return (
    <div className='p-5'>
      <h1>RTK - Redux ToolKit</h1>
      <button className='bg-blue-400 m-1' onClick={() => dispatch(increment())}>increment</button>
      <button className='bg-green-400 m-1' onClick={() => dispatch(decrement())}>decrement</button>
      <button className='bg-sky-400 m-1' onClick={() => dispatch(incrementByAmount(3))}>increment by amount(3)</button>
      <span>Counter: {counter}</span>
    </div>
  );
};
