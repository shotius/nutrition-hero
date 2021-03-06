import React, { Children } from 'react'
import Slider from './Slider'
import { Wrapper } from '../../Styles'
import { sizes, sliderStyle } from '../../shared/utils/styles'
// slider 1 pictures
import thierry from '../../shared/assests/Image 1@2x.png'
import lady from '../../shared/assests/slide-2.png'
// slider 2 pictures
import saltMan from '../../shared/assests/Image 3@2x.png'
import pete from '../../shared/assests/pete.png'
import contribMan from '../../shared/assests/contribMan.png'
import { SliderWrap } from './Styles'
import { useWindowSize } from '../../shared/hooks/useWindowSize'

const Carousel_1 = [
    {
        img: thierry,
        name: 'Thierry Henry ',
        header: 'Sports Expertise',
        text: 'Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.',
        align: sliderStyle.pictureLeft
    },
    {
        img: lady,
        name: 'Cheryl Teagann',
        header: 'Miss Pole Dance', 
        text: 'An international performer and Miss Pole Dance UK 2016 champion and 2017 UK Pole doubles champion. Taught at top London studios, performer at Bodypower.',
        align: sliderStyle.pictureLeft
    }
]

const Carousel_2 = [
    {
        img: saltMan,
        header: 'Cooking Expertise',
        name: 'Salt Bae ',
        text: 'Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.',
        align: sliderStyle.pictureRight
    },
    {
        img: pete,
        header: 'Pete Cookson',
        name: 'Owner Of Lifestyle Chef',
        text: 'Head Chef, delivering nutrient-dense, gourmet meals to thousands of health-conscious clients nationwide. 20 years cooking in some of the best restaurants around the world.',
        align: sliderStyle.pictureRight
    },
    {
        img: contribMan,
        header: 'Drew Price',
        name: 'Men???s Health Contributor',
        text: 'Working one-to-one and in groups with a number of different client types, tutoring and lecturing on pre and post graduate Human Nutrition, Dietetics, and Nutritional Therapies courses.',
        align: sliderStyle.pictureRight

    }
]

console.log(window.innerWidth, Number(sizes.laptop))
console.log(window.innerWidth > Number(sizes.laptop))


const Carousels = React.forwardRef((props, ref) => {
    // re-renders page on browser window resize
    const width = useWindowSize()
    
    // if width is smaller then laptop screen remove wrapper from carousel
    const Wrap = ({children}) => {
        if (width > Number(sizes.tablet)) 
            return <SliderWrap ref={ref}>{children}</SliderWrap>
        return <div ref={ref}>{children}</div>
    }

    return (
        <Wrap>
            <Slider slides={Carousel_1}/>
            <Slider slides={Carousel_2}/>
        </Wrap>
    )
})
export default Carousels