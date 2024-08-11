import { FormEvent, useEffect, useState } from 'react'

export default function App() {
  const [userInput, setUserInput] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState({
    status: false,
    start: false,
    stop: true
  })

  useEffect(() => {
    let interval: number
    if (isRunning.status && timer < userInput) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning.status, timer])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    setIsRunning((prev) => ({
      status: !prev.status,
      start: !prev.start,
      stop: !prev.stop
    }))
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Hello there!</h1>

        <form
          className="flex flex-col items-center"
          action=""
          onSubmit={handleSubmit}
        >
          <input
            className="mb-4 p-2 border border-gray-300 rounded"
            type="number"
            id="seconds-input"
            placeholder="Write seconds"
            value={userInput}
            onChange={(e) => setUserInput(parseInt(e.target.value))}
          />
          <button
            className="mb-2 p-2 bg-blue-500 text-white rounded disabled:bg-gray-400 w-1/2"
            id="start"
            type="submit"
            disabled={isRunning.start}
          >
            Start
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded disabled:bg-gray-400 w-1/2"
            id="stop"
            type="submit"
            disabled={isRunning.stop}
          >
            Stop
          </button>
        </form>

        {/* Manual Reset */}
        {/* <div className="p-4">
					<button className="p-2 bg-black text-white rounded w-full" onClick={()=>setTimer(0)}>
						Reset
					</button>
				</div> */}
        <div id="timer" className="mt-6 text-2xl font-semibold">
          {timer}
        </div>
      </div>
    </>
  )
}
