import Header from './Header'
import StyleReset from './StyleReset'
import { ImgBackground, MainHeaderWrap } from './Styles';


function App() {
  return (
   <>
    <StyleReset />
    <Header />
    <MainHeaderWrap>
      <ImgBackground />
      
      <MainHeader>
          Captivating Header goes Here
      </MainHeader>
    
    </MainHeaderWrap>
  </>
  );
}

export default App;
