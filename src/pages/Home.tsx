import { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Link to={'/chef'}>Yes Chef</Link>
      </div>
    </>
  )
}

export default Home
