import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      
      <div className="card">
        <button className='bg-gray-700 space-y-5 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' onClick={() => setCount((count) => count + 1)}>
          Las veces que has tocado el botón son: {count}
        </button>
      </div>
    </>
  )
}

export default App
