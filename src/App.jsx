import DancingCat from './components/DancingCat'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>🐱 Dancing Cat Page</h1>
        <p>Watch the cat dance with amazing animations!</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
