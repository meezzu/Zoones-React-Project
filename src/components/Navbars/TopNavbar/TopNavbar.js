import React,{useState} from 'react';
import {Logo, TopNavbarContainer, Time, DayContainer, DayTitle } from './../../Styles/NavbarStyles';
import Zoones from './../../Assets/Logo 1.svg';
import { LeftIconInput, RightIconInput } from '../../Input/Input';
import BackwardIcon from './../../Assets/angle-left-solid.svg';
import ForwardIcon from './../../Assets/angle-right-solid.svg';
import { days } from '../../Input/timezones';
import { LeftIcon, RightIcon } from '../../Styles/InputStyles';

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
            <Time>Thu Sep 30 <strong>8:46AM(GMT+1)</strong> </Time>
            <LeftIconInput type='text' placeholder='Search for a city or person' />
            <DayContainer>
                <LeftIcon src={BackwardIcon} alt='backward-icon' onClick={handlePreviousDayClick} />
                <DayTitle>{days[index]}</DayTitle>
                <RightIcon src={ForwardIcon} alt='backward-icon' onClick={handleNextDayClick}/>
            </DayContainer>
            <RightIconInput />
        </TopNavbarContainer>
    )
}

export default TopNavbar;
