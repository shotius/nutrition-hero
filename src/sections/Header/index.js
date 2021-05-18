import React, {useEffect} from 'react'
import Button from '../../shared/components/Button'
import { Wrap, PageLogo, NavBar, Sticky } from './Styles'

const Header = ({exercisesRef, nutritionRef}) => {
    
    useEffect(() => {
        console.log('exercisesRef', exercisesRef.current)
        console.log('nutritionRef', nutritionRef.current)
      }, [])
    
    return (
        <Sticky>
            <Wrap>
                <PageLogo />
                <NavBar >
                    <Button type="navLink" isActive={true} onClick={() => {}}>Exercises</Button>
                    <Button type="navLink" isActive={true} onClick={() => {}}>expreties</Button>
                    <Button type="navLink" isActive={true} onClick={() => {}}>nutrition</Button>
                    <Button type="navLink" isActive={true} onClick={() => {}}>app</Button>
                    <Button type="primary" margin="0px 31px 0px 0px" onClick={() => {}}>Sign up</Button>
                    <Button type="login" onClick={() => {}}>login</Button>
                </NavBar>
            </Wrap>
        </Sticky>
    )
}
export default Header