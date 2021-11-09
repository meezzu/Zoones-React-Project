import React, { useState } from 'react'
import { 
    LeftIcon, 
    StyledDisabledInput, 
    StyledInput, 
    StyledLeftIconContainer, 
    StyledLeftIconInput, 
    StyledRightIconContainer, 
    StyledRightIconInput 
} from '../Styles/InputStyles';
import SearchIcon from './../Assets/search-solid.svg';
import {time} from './timezones';


const Input = (props) => {
    const {type, placeholder} = props;
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = e => setInputValue(e.target.value);
    return (
        <StyledInput type={type} placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
    )
};

export const LeftIconInput = (props) => {
    const {type, placeholder} = props;
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = e => setInputValue(e.target.value);
    return (
        <StyledLeftIconContainer>
        <LeftIcon src={SearchIcon} alt='search-icon' />
        <StyledLeftIconInput type={type} placeholder={placeholder} value={inputValue} onChange={handleInputChange}/>
        </StyledLeftIconContainer>
    )
}

export const RightIconInput =({ value }) => {
    const [timeState, setTimeState] = useState('24 hours');

    const handleSelectChange =(event) => {
        setTimeState(event.target.value);
    }
    return (
        <StyledRightIconContainer value={value} onChange={handleSelectChange}>
            <StyledRightIconInput value={timeState} defaultChecked>24 hours</StyledRightIconInput>
            {time.map((timeZone, index) => (
                <StyledRightIconInput value={timeZone} key={index} >
                    {timeZone}
                </StyledRightIconInput>
            ))}
        </ StyledRightIconContainer>
    )
}

export const DisabledInput = (props) => {
    const {type, placeholder} = props;
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = e => setInputValue(e.target.value);
    return(
        <>
        <StyledDisabledInput type={type} placeholder={placeholder} value={inputValue} onChange={handleInputChange} />
        </>
)}

export default Input;
