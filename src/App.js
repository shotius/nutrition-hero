import Header from './sections/Header'
import MainSection from './sections/MainSection';
import NormalizeStyle from './NormalizeStyle';
import Carousels from './sections/Carousels';
import Footer from './sections/Footer';
import ForthSection from './sections/ForthSection';
import { createRef, useEffect, useRef} from 'react';
import Fonts from './Fonts'
import Exercise from './sections/Exercise'
import Nutrition from './sections/Nutrition/Index';

function App() {
  const exerciseRef = createRef()
  const nutritionRef = useRef()
  const expertiesRef = useRef()
  const appRef = useRef()

  useEffect(() => {
    console.log('exercise', exerciseRef.current)
    console.log('nutri', nutritionRef.current)
    console.log('expert', expertiesRef.current)
    console.log('app', appRef.current)
  })
  
  return (
   <>
      <Fonts />
      <NormalizeStyle />
      <Header 
        exerciseRef={exerciseRef} 
        nutritionRef={nutritionRef}
        expertiesRef={expertiesRef}
        appRef={appRef}
        />
      <MainSection />
      <Exercise ref={exerciseRef}/>
      <Nutrition ref={nutritionRef}/>
      <Carousels ref={expertiesRef}/>
      <ForthSection ref={appRef}/>
      <Footer />
  </>
  );
}

export default App;
