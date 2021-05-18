import Header from './sections/Header'
import MainSection from './sections/MainSection';
import NormalizeStyle from './NormalizeStyle';
import SectionTwo from './sections/SecondSection'
import Carousels from './sections/Carousels';
import Footer from './sections/Footer';
import ForthSection from './sections/ForthSection';
import { createRef, useRef } from 'react';

function App() {
  const exercisesRef = createRef()
  const nutritionRef = useRef()
  const expertiesRef = useRef()
  const App = useRef()

  const ref = {
    exercisesRef,
    nutritionRef,
  }
  
  return (
   <>
      <NormalizeStyle />
      <Header exercisesRef={exercisesRef} nutritionRef={nutritionRef} />
      <MainSection />
      {/* <SectionTwo ref={ref} />  */}
      {/* <Carousels />
      <ForthSection/>
      <Footer /> */}
  </>
  );
}

export default App;
