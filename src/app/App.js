import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from '../components/view/header/Header';
import MainSpinner from '../components/UI/spinners/MainSpinner';
  
const Page404 = lazy(() => import('../components/view/pages/system/404'));
const MainPage = lazy(() => import('../components/view/pages/main/MainPage'));

const App = () => {
  return (
    <>
    <Router>
      <div className="app"> 
      <Header/>
          <main>
              <Suspense fallback={<MainSpinner/>}>
                  <Routes>
                      <Route path="/" element={<MainPage/>}/>
                      {/* <Route path="/comics" element={<ComicsPage/>}/>
                      <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType='comic'/>}/>
                      <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType='character'/>}/> */}
                      <Route path="*" element={<Page404/>}/> 
                  </Routes>
              </Suspense>
          </main>
      </div>
    </Router>
    </>
  );
}

export default App;
