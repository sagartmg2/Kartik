import logo from './logo.svg';
import './App.css';
import About from './About';
import Card from './Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='about' element={<About />} />
          <Route path='card' element={<Card />} />
        </Routes>

      </BrowserRouter>
    </>

  )

  // return null;
  // return 1; 

  return (
    <div>
      <h1>App componetn  1+ 1  {true ? "true" : "false"} </h1>
      <About />
      <div className='card-wrapper'>
        {/* <div className='card-wrapper' style={{
        display: "flex"
      }}> */}
        {/* 

          funciton Card(name,age ){
            if(!name){
              log 
            }
          }


          Card("ram")
          Card("hari")
          Card()

          argument - props 

        */}

        <Card name="ram" age={10} />
        <Card name="hari" />
        <Card />
      </div>
    </div>


    /* 
    JSX 
    
    */
  );
}

export default App;
