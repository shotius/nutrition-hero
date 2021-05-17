import Header from './components/Header'
import MainSection from './components/MainSection';
import NormalizeStyle from './NormalizeStyle';
import SectionTwo from './components/SectionTwo'
import Carousels from './components/Carousels';
import Footer from './components/Footer';
import ForthSection from './components/ForthSection';

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
