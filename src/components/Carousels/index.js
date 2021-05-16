import React from 'react'
import Slider from './Slider'
import { Wrapper } from '../../Styles'
import thierry from '../../shared/assests/Image 1@2x.png'
const text = 'Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.'
const header = 'Sports Expertise'
const name = 'Thierry Henry '

const data = [
    {
        img: thierry,
        text: text,
        header: header,
        name: name
    }
]

const Carousels = () => {
    return (
        <Wrapper>
            <Slider data={data}/>
        </Wrapper>
    )
}
export default Carousels