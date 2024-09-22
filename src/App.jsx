import { useState } from 'react'
import './App.css'

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");


  const calcBmi = (e) => {
    if (weight === 0 || height === 0) {
      alert("Please Enter A Valid Weight And Height")
    }

    else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1))

      if (bmi < 25) {
        setMessage("You Are Under Weight")
      }
      else if (bmi >= 25 && bmi < 30) {
         setMessage("You Are A Healthy Weight")
      }
      else{
        setMessage("You Are Over Weight")
      }
    }
  }


const reload  = () =>{
  window.location.reload()
}



  return (
    <>
      <div className='bg-white w-96 p-8 mx-auto my-20'>
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
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <br />
        <button onClick={calcBmi} type='submit' className='bg-blue-600 text-white p-3 w-80 rounded-md'>Submit</button>
        <button onClick={reload} className='bg-gray-300 text-black p-3 w-80 rounded-md mt-2 border border-black'>Reload</button>
        <br /><br />
        <p className='text-lg font-semibold text-center text-gray-800'>Your Bmi Is : {bmi}</p>
        <p className='text-lg font-semibold text-center text-gray-500'>{message}</p>
      </div>
    </>
  )
}

export default App
