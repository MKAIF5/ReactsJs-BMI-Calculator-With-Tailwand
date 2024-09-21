import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi , setBmi] = useState("");
  const [message , setMessage] = useState("");

  return (
    <>
      <div className='bg-white w-96 p-8 mx-auto my-36'>
        <div>
          <h1 className='text-black text-2xl font-bold text-center'>BMI Calculator</h1>
        </div>
        <br />
        <div className='leading-9'>
          <label className='text-sm'>Weight (Lbs)</label><br />
          <input
            className='border-2 border-black p-1 w-80 rounded-lg'
            type="number"
            value={weight}
            placeholder='Enter Weight Value'
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>

        <div className='leading-9'>
          <label className='text-sm'>Height (In)</label><br />
          <input
            className='border-2 border-black p-1 w-80 rounded-lg'
            type="number"
            value={height}
            placeholder='Enter Height Value'
          />
        </div>
        <br />
        <button type='submit' className='bg-blue-600 text-white p-3 w-80 rounded-md'>Submit</button>
        <button onClick={reload} className='bg-gray-300 text-black p-3 w-80 rounded-md mt-2 border border-black'>Reload</button>
        <br /><br />
        <p className='text-xl font-semibold text-center text-gray-800'>Your Bmi Is : {bmi}</p>
        <p className='text-xl font-semibold text-center text-gray-800'>{message}</p>
      </div>
    </>
  )
}

export default App
