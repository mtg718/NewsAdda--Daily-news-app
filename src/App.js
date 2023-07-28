 
import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

import LoadingBar from 'react-top-loading-bar'
import{
  BrowserRouter,
  Route,Routes
} from "react-router-dom"

const App =()=> {
   
  const [progress, setProgress] = useState(0)

    return (
     
       <div>
      <BrowserRouter>
     

      <LoadingBar
        color='#f11946'
        height={2}
       
        progress={progress}
       
        
      />
      <NavBar/>

     
    
     <Routes>
      <Route path="/" element={<News setProgress =  {setProgress}     key="general" pageSize={6} country='in'  category="general"/>}  ></Route>
      </Routes>
    
    
      <Routes>
      <Route exact path="/business" element={<News setProgress =  {setProgress}     key="business" pageSize={6} country='in'  category='business'/>} > </Route>
      </Routes>
      
     <Routes>
      <Route exact path="/sports" element={<News setProgress =  {setProgress}      key="sports" pageSize={6} country='in'  category='sports'/>} ></Route>
      </Routes>
      
     <Routes>
      <Route exact path="/technology" element={<News setProgress =  {setProgress}     key="technology" pageSize={6} country='in'  category='technology'/>  }></Route>
      </Routes>

      
     <Routes>
      <Route exact path="/health" element={<News setProgress =  {setProgress}      key="health" pageSize={6} country='in'  category='health'/> } ></Route>
      </Routes>
      
     <Routes>
      <Route exact path="/science" element={<News setProgress =  {setProgress}      key="science" pageSize={6} country='in'  category='science'/>  }></Route>
      </Routes>


      <Routes>
      <Route  exact path="/entertainment" element={ <News setProgress =  {setProgress}     key="entertainment"  pageSize={6} country='in'  category='entertainment'/> }> </Route>
      </Routes>
    
     
     </BrowserRouter>

     </div>

     
    )
  }


export default App;