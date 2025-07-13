
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
function App() {
  return (
    <>
      {/* <div className='container'>
        <Card name="Amit" email="amitkm@gmail.com"/>
        <Card name="Vidhi" email="vidhi@gmail.com"/>
        <Card name="Amit" email="amitkm@gmail.com"/>
        <Card name="Vidhi" email="vidhi@gmail.com"/>
        <Card name="Amit" email="amitkm@gmail.com"/>
        <Card name="Vidhi" email="vidhi@gmail.com"/>
        <Card name="Amit" email="amitkm@gmail.com"/>
        <Card name="Vidhi" email="vidhi@gmail.com"/>
        <Card></Card>
      </div> */}
     {/* <Count></Count> */}
     {/* <Form/> */}
     {/* <FetchData/> */}
     {/* <List/> */}
    <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}/>
       <Route path='/form' element={<Form/>}></Route>
       <Route path='/count' element={<Count/>}/>
       <Route path='*' element={<Error/>}/>
     </Routes>
    </>
  )
}

export default App
