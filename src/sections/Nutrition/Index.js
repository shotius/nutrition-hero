import React, {useState} from 'react'
import Button from '../../shared/components/Button'
import SectionHeader from '../../shared/components/SectionHeader'
import { TextWrap, NutritionText, NutritionBackground, NutritionWrap, Nav, ImageWrap, InfoWrap, Header, Dots } from './Styles'
import { Img } from '../Exercise/Styles'
import food_1 from '../../shared/assests/Rectangle 1473.png'
import { Dot } from '../Carousels/Slider/Styles'


const Nutrition = React.forwardRef((props,  ref) => {
    const [activeIndex, setActiveIndex] = useState(0)
   
    const data = [
        {   
            id: 0,
            heading: "Healty",
            img: '',
            header: ' A short title works',
            text: ' best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.'
        },
        {
            id: 1,
            heading: 'Proffesioanl',
            img: '',
            header: 'Bla bla bla',
            text: ' segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche'
        },
    ]


    return (    
        <NutritionBackground>
            <NutritionWrap>
                <Header size="large" color="white">
                    Nutrition
                </Header>
                <InfoWrap>
                    <Nav>
                    {data.map(data => (
                        <Button 
                            key={data.id}
                            type="tagLink" 
                            color='dirtyWhite' 
                            onhover="white"
                            onClick={() => {}}
                            >
                                {data.heading}
                        </Button>
                    ))}
                    </Nav>
                    <TextWrap color="white">
                        <SectionHeader size="medium" color="white">
                        A short title works
                        </SectionHeader> 
                        <NutritionText>
                            best At home to gym, crossfit to pilates, yoga to bodyweight, as well as healthy and easy to make breakfasts, lunches, dinners and snacks. We want to make sure you enjoy the journey for a healthy lifestyle.
                        </NutritionText>
                    </TextWrap>
                    <ImageWrap>
                        <Img src={food_1} />
                    </ImageWrap>
                    <Dots>
                        <Dot />
                    </Dots>
                </InfoWrap>
            </NutritionWrap>
        </NutritionBackground>
    )
})
export default Nutrition