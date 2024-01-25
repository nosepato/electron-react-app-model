import icons from './assets/icons.svg'
import Dices from './components/Dices/Dices'
import './App.css'

function App() {
  return(
    <div className='App'>
        <header className='App-header'>
          <h1> Jogo dos dados </h1>
        </header>
        <Dices/>
    </div>
  )
}

export default App