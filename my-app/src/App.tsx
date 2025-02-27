import RootRouter from './router'
import {BrowserRouter} from 'react-router-dom'
import './style.less'

function App() {
  return (
    <BrowserRouter>
      <RootRouter/>
    </BrowserRouter>
  )
}

export default App
