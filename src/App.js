import Header from './sections/Header'
import MainSection from './sections/MainSection';
import NormalizeStyle from './NormalizeStyle';
import SectionTwo from './sections/SecondSection'
import Carousels from './sections/Carousels';
import Footer from './sections/Footer';
import ForthSection from './sections/ForthSection';
import { createRef, useRef } from 'react';

import { createGlobalStyle } from "styled-components";
import LatoBlack from './fonts/Lato/Lato-Black.ttf'
import LatoBold from './fonts/Lato/Lato-Bold.ttf'
import LatoRegular from './fonts/Lato/Lato-Bold.ttf'
import Fonts from './Fonts'

// const Fonts =  createGlobalStyle`
//   @font-face {
//         font-family: 'Lato Black';
//         src: url(${LatoBlack}) format('truetype');
//   }
//   @font-face {
//         font-family: 'Lato Bold';
//         src: url(${LatoBold}) format('truetype');
//   }
//   @font-face {
//         font-family: 'Lato Regular';
//         src: url(${LatoRegular}) format('truetype');
//         font-style: normal;
//   }
//   h1 {
//     font-family: "Lato Black"
//   }
  
// `;

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
      <Fonts />
      <NormalizeStyle />
      <Header exercisesRef={exercisesRef} nutritionRef={nutritionRef} />
      <MainSection />
      <SectionTwo ref={ref} /> 
      {/* <Carousels />
      <ForthSection/>
      <Footer /> */}
  </>
  );
}

export default App;
