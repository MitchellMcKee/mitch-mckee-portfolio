import { useState } from 'react'

function Home() {
  const [cookCount, setCookCount] = useState(0);

  return (
    <>
      <h1>Let Him Cook...</h1>
      <h2>{cookCount}</h2>
      <button onClick={() => setCookCount(cookCount + 1)}>Cook</button>
    </>
  )
}

export default Home
