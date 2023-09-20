import './App.css';
import React,{Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
const ReadBook= React.lazy(()=>{return import( './Components/ReacBook/ReadBook')})
const Login = React.lazy(()=>{return import('./Components/Login/Login')})
function App() {
  return (
    <div className="App">
   <Suspense fallback={<p className='loading'>Loading...</p>}>
<Routes>
  <Route path='/readbook' element={<ReadBook/>}/>
  <Route path='/' element={<Login/>}  />
  <Route path='*' element={<Login/>}  />
  <Route path='/login' element={<Login/>}  />
</Routes>
</Suspense>
    </div>
  );
}

export default App;
