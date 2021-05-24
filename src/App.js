import Header from './sections/Header'
import MainSection from './sections/MainSection';
import NormalizeStyle from './NormalizeStyle';
import Carousels from './sections/Carousels';
import Footer from './sections/Footer';
import ForthSection from './sections/ForthSection';
import { createRef, useRef} from 'react';
import Fonts from './Fonts'
import Exercise from './sections/Exercise'
import Nutrition from './sections/Nutrition/Index';

function App() {
  const exerciseRef = createRef()
  const nutritionRef = useRef()
  // const expertiesRef = useRef()
  // const App = useRef()

  
  return (
   <>
      <Fonts />
      <NormalizeStyle />
      <Header exerciseRef={exerciseRef} nutritionRef={nutritionRef} />
      <MainSection />
      <Exercise ref={exerciseRef}/>
      <Nutrition />
      <Carousels />
      <ForthSection/>
      <Footer />
  </>
  );
}

export default App;
