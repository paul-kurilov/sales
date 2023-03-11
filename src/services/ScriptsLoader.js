import {BrowserRouter, Route, Routes} from 'react-router-dom';
import feather from 'feather-icons';
import CreateScroll from '../resources/assets/js/dashforge.contacts';



 


const ScriptsLoader = () => {


  const loadScripts = (path) => {
    feather.replace();

    switch (path) {
      case "/": 
        CreateScroll();
        break;
      
      default: 
        CreateScroll();
        break;
    }
    
    
  }
  

  return(
    <>
    <BrowserRouter>  
      <Routes>
        <Route path="/" element={loadScripts("/")}/>
      </Routes> 
    </BrowserRouter>
    </>
  )
}

export default ScriptsLoader;