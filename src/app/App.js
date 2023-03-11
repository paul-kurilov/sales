import {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import MainSpinner from '../components/UI/spinners/MainSpinner';
import Header from '../components/view/header/Header';
import Footer from '../components/view/footer/Footer';
import MainPage from '../components/view/pages/main/MainPage';

const Page404 = lazy(() => import('../components/view/pages/system/404'));
// const MainPage = lazy(() => import('../components/view/pages/main/MainPage'));
const SummaryPage = lazy(() => import('../components/view/pages/summary/SummaryPage'));
const ProjectsPage = lazy(() => import('../components/view/pages/projects/ProjectsPage'));



const App = () => {
 
  return (
    <>
    <BrowserRouter>  
      <Header/> 
      <div className='content content-fixed'> 
        <Suspense fallback={<MainSpinner/>}>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/summary/:type/:data" element={<SummaryPage />}/> {/*Component={SummaryPageLayout} dataType='comic' */}
            <Route path="/projects/:type/:data" element={<ProjectsPage />}/> {/*Component={SummaryPageLayout} dataType='comic' */}
            <Route path="*" element={<Page404/>}/> 
          </Routes>
        </Suspense>
      </div>  
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
