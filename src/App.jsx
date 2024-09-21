import './App.css'

function App() {

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
          <button className='bg-blue-600 text-white p-3 w-80 rounded-md'>Submit</button>
          <button className='bg-gray-300 text-black p-3 w-80 rounded-md mt-2 border border-black'>Reload</button>
         <br /><br />
         <p className='text-xl font-semibold text-center text-gray-800'>Your Bmi Is : </p>
        </div>
    </>
  )
}

export default App
