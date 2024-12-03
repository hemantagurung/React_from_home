import React,{useState} from 'react'

const Counter = () => {
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };

    const decrement = () =>{
        setCount(count -1 );
    };

    const reset = () => {
        setCount(0);
    };



  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="mb-6">
        <h1 class="text-4xl font-bold text-gray-800">Counter: {count}</h1>
    </div>

    <div class="space-x-4">
        <button 
            onClick={increment} 
            class="px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Increment
        </button>
        <button 
            onClick={reset} 
            class="px-4 py-2 bg-gray-500 text-white font-semibold rounded shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Reset
        </button>
        <button 
            onClick={decrement} 
            class="px-4 py-2 bg-red-500 text-white font-semibold rounded shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300">
            Decrement
        </button>
    </div>
</div>

  )
}

export default Counter