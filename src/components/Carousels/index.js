import React from 'react'
import Slider from './Slider'
import { Wrapper } from '../../Styles'
import thierry from '../../shared/assests/Image 1@2x.png'
import lady from '../../shared/assests/slide-2.png'

const Carousel_1 = [
    {
        img: thierry,
        name: 'Thierry Henry ',
        header: 'Sports Expertise',
        text: 'Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.',
    },
    {
        img: lady,
        name: 'Cheryl Teagann',
        header: 'Miss Pole Dance 2017', 
        text: 'An international performer and Miss Pole Dance UK 2016 champion and 2017 UK Pole doubles champion. Taught at top London studios, performer at Bodypower.',
    }
]

const Carousels = () => {
    return (
        <Wrapper>
            <Slider slides={Carousel_1}/>
            {/* <Slider data={data}/> */}
        </Wrapper>
    )
}
export default Carousels