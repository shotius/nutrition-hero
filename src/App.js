import Header from './sections/Header'
import MainSection from './sections/MainSection';
import NormalizeStyle from './NormalizeStyle';
import SectionTwo from './sections/SecondSection'
import Carousels from './sections/Carousels';
import Footer from './sections/Footer';
import ForthSection from './sections/ForthSection';

function App() {
  return (
   <>
      <NormalizeStyle />
      <Header />
      <MainSection />
      <SectionTwo />
      <Carousels />
      <ForthSection/>
      <Footer />
  </>
  );
}

export default App;
