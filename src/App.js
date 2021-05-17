import Header from './sections/Header'
import MainSection from './sections/MainSection';
import NormalizeStyle from './NormalizeStyle';
import SectionTwo from './sections/SecondSection'
import Carousels from './sections/Carousels';
import Footer from './sections/Footer';
import ForthSection from './sections/ForthSection';
import { useRef } from 'react';

function App() {
  const exercisesRef = useRef()
  const nutritionRef = useRef()
  const expertiesRef = useRef()
  const App = useRef()

  console.log(exercisesRef.current, 'current')
  return (
   <>
      <NormalizeStyle />
      <Header />
      <MainSection />
      <SectionTwo exercisesRef={exercisesRef}/> 
      <Carousels />
      <ForthSection/>
      <Footer />
  </>
  );
}

export default App;
