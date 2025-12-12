import React, { useEffect, useState } from 'react'
import CollaborativeEditor from './CollaborativeEditor'

export default function App() {
  const [room, setRoom] = useState(null)
  const [createdLink, setCreatedLink] = useState(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const r = params.get('room')
    if (r) setRoom(r)
  }, [])

  async function createSession() {
    const res = await fetch('http://localhost:4000/api/session', { method: 'POST' })
    const data = await res.json()
    setCreatedLink(data.url)
    setRoom(data.id)
    window.history.replaceState({}, '', `/?room=${data.id}`)
  }

  return (
    <div className="app">
      <header>
        <h1>Coding Interview — Prototype</h1>
      </header>
      <main>
        {!room && (
          <div className="controls">
            <button onClick={createSession}>Create session</button>
            {createdLink && (
              <p>Share this link: <a href={createdLink}>{createdLink}</a></p>
            )}
          </div>
        )}

        {room && (
          <div>
            <p>Room: <strong>{room}</strong></p>
            <CollaborativeEditor room={room} />
          </div>
        )}
      </main>
    </div>
  )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
