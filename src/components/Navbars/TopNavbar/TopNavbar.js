import React,{useState} from 'react';
import {Logo, TopNavbarContainer, Time, DayContainer, DayTitle, NavMenu } from './../../Styles/NavbarStyles';
import Zoones from './../../Assets/Logo 1.svg';
import { LeftIconInput, RightIconInput } from '../../Input/Input';
import BackwardIcon from './../../Assets/Arrow right.svg';
import ForwardIcon from './../../Assets/Arrow left.svg';
import { days } from '../../../data';
import classes from '../TopNavbar/TopNavbar.module.css'

const TopNavbar = () => {
    const [index, handleIndex] = useState(1);
    const handlePreviousDayClick = () => {
        handleIndex(index-1);
    };
    const handleNextDayClick = () => {
        handleIndex(index + 1);
    }
    return (
        <TopNavbarContainer>
            <Logo src={Zoones} alt='brand-logo' />
            <NavMenu className="navMenu">
            <Time>Thu Sep 30 <strong>8:46AM(GMT+1)</strong> </Time>
            <LeftIconInput type='text' placeholder='Search for a city or person' />
            <DayContainer>
                <img src={BackwardIcon} alt='backward-icon' onClick={handlePreviousDayClick} className={classes.leftIcon} />
                <DayTitle>{days[index]}</DayTitle>
                <img src={ForwardIcon} alt='backward-icon' onClick={handleNextDayClick} className={classes.rightIcon}/>
            </DayContainer>
            <RightIconInput />
            </NavMenu>
            
            
        </TopNavbarContainer>
    )
}

export default TopNavbar;
