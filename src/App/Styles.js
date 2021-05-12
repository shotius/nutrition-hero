import styled from "styled-components";

import img from  '../shared/assests/Large Hero.png'
// const img = '/home/shoutius/sweeft_digital/workout/nutrition-react/src/shared/assests/Large Hero.png'

console.log(img)
export const MainHeaderWrap = styled.div`
    height: 720px;
    width: 100%;
    background-image: url(${'../shared/assests/Large Hero.png'});
`;

export const ImgBackground = styled.img.attrs({
    src: img
})`
    width: 100%;
    z-index: -9;
`