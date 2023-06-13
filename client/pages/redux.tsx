import { useState } from 'react';
import { useSelector } from 'react-redux';

import { createStore } from 'redux';

const counterReducer = (state: any = { counter: 0 }, action: any) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
  }
}

const store = createStore(counterReducer);

export default function Redux() {
  const [ value, setValue ] = useState(0);

  store.subscribe(() => {
    setValue(store.getState()?.counter);
  });

  return (
    <div className='p-20'>
      <span onClick={() => store.dispatch({ type: 'increment' })} className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Increase</span>
      <br /><br />
      <span onClick={() => store.dispatch({ type: 'decrement' })} className="bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Decrease</span>
      <br /><br />
      {value}
    </div>
  )
}