import {
  Route,  
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import './App.css';

// pages
import Home from './pages/Home';
import About from './pages/About';
import CareerDetails from './pages/careers/CareerDetails';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './pages/NotFound';
import Careers, { careerLoader } from './pages/careers/Careers';
import { careerDetailsLoader } from './pages/careers/CareerDetails';

// layouts
import RootElement from './layouts/RootElement';
import HelpLayout from './layouts/HelpLayout';
import CareerLayout from './layouts/CareerLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootElement/>}>
      <Route index element={<Home/>} />
      <Route path='/about' element={<About/>} />

      <Route path='help' element={<HelpLayout/>}>
          <Route path='faq' element={<Faq />} />   
          <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='careers' element={<CareerLayout />}>
        <Route 
        index 
        element={<Careers />} 
        loader={careerLoader}
        />
        <Route 
        path=':id' 
        element={<CareerDetails/>}
        loader={careerDetailsLoader}
         />
      </Route>

      <Route path='*' element={<NotFound />} />

    </Route>
  )
);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
