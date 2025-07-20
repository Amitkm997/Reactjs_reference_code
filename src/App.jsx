
import './App.css'
import Count from './Count'
import FetchData from './FetchData'
import Form from './Form'
import List from './List'
import Home from './components/Home'
import Navbar from './Navbar'
import About from './components/About'
import {Routes,Route} from 'react-router-dom'
import Error from './components/Error'
import LiftingStateUp from './LiftingStateUp'
import CallbackProps from './CallbackProps'
import CounterProvider from './context/counterContext'
import ConterController from './controllers/ConterController'
import CounterDisplay from './controllers/CounterDisplay'
import ThemeProvider from './ThemeSwitcher'
import ThemeChange from './ThemeChange'
import UseReducer from './UseReducer'
function App() {
  return (
    <>
    <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}/>
       <Route path='/form' element={<Form/>}></Route>
       <Route path='/count' element={<Count/>}/>
       <Route path='/fetch' element={<FetchData/>}/>
       <Route path='*' element={<Error/>}/>
       <Route path='/list' element={<List/>}/>
       <Route path='/lift' element={<LiftingStateUp/>}/>
       <Route path='/callback' element={<CallbackProps/>}/>
     </Routes>
     {/* <CounterProvider>
       <CounterDisplay/>
       <ConterController/>
     </CounterProvider> */}
     <ThemeProvider>
      <ThemeChange/>
     </ThemeProvider>
     <UseReducer/>
    </>
  )
}

export default App
