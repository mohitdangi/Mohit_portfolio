import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Banner from './pages/Banner';
import ProblemSolving from './components/ProblemSolving';
import Skills from './components/Skills';
import MyWork from './components/MyWorks';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home Page with Carousel & Feature Section */}
     
        <Route index  element={
            <>
              <Banner />
              <ProblemSolving /> 
              <Skills/>
              <MyWork/> {/* Now it will be shown! */}
            </>
          } />
      
      </Route>
    </Routes>
  )
}

export default App;
