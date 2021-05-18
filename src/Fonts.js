import { createGlobalStyle } from "styled-components";
import Lato from './fonts/Lato/Lato-Light.ttf'
import LatoBlack from './fonts/Lato/Lato-Black.ttf'
import LatoBold from './fonts/Lato/Lato-Bold.ttf'
import LatoRegular from './fonts/Lato/Lato-Regular.ttf'
import LatoMedium from './fonts/Lato/Lato-Medium.ttf'
import SFCompact from './fonts/SFCompact/FontsFree-Net-SFCompactDisplay-Black.ttf'

export default createGlobalStyle`
  @font-face {
        font-family: 'Lato Black';
        src: url(${LatoBlack}) format('truetype');
  }
  @font-face {
        font-family: 'Lato Bold';
        src: url(${LatoBold}) format('truetype');
  }
  @font-face {
        font-family: 'Lato Regular';
        src: url(${LatoRegular}) format('truetype');
  }
  @font-face {
        font-family: 'Lato';
        src: url(${Lato}) format('truetype');
  }
  @font-face {
        font-family: 'Lato Medium';
        src: url(${LatoMedium}) format('truetype');
  }
  @font-face {
        font-family: 'Compact Black';
        src: url(${SFCompact}) format('truetype');
  }
`;