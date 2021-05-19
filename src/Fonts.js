import { createGlobalStyle } from "styled-components";
import Lato from './fonts/Lato/Lato-Light.ttf'
import LatoBlack from './fonts/Lato/Lato-Black.ttf'
import LatoBold from './fonts/Lato/Lato-Bold.ttf'
import LatoRegular from './fonts/Lato/Lato-Regular.ttf'
import LatoMedium from './fonts/Lato/Lato-Medium.ttf'
import SFCompact from './fonts/SFCompact/FontsFree-Net-SFCompactDisplay-Black.ttf'
import SfSemibold from './fonts/SFCompact/FontsFree-Net-SFProText-Semibold.ttf'
import SfRegular from './fonts/SFCompact/FontsFree-Net-SFProText-Regular-1.ttf'

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
        font-family: 'SfCompact Black';
        src: url(${SFCompact}) format('truetype');
  }
  @font-face {
        font-family: 'Sf Semibold';
        src: url(${SfSemibold}) format('truetype');
  }
  @font-face {
        font-family: 'Sf Regular';
        src: url(${SfRegular}) format('truetype');
  }
`;