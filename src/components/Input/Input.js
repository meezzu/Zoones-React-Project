import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { 
    LeftIcon, 
    StyledDisabledInput, 
    StyledInput, 
    StyledLeftIconContainer, 
    StyledLeftIconInput, 
} from '../Styles/InputStyles';
import SearchIcon from './../Assets/search-solid.svg';
import {time} from '../../data';
import { filterPeriod } from '../../redux/periodFilter/periodFilterActions';
import classes from '../Input/Input.module.css'


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
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(filterPeriod('6'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
    
    const handleSelectChange =(event) => {
        dispatch(filterPeriod(event.target.value[0]));
    }
    return (
        <select value={value} onChange={handleSelectChange} className={classes.select}>
            {time.map((timeZone, index) => (
                <option value={timeZone} key={index} >
                    {timeZone}
                </option>
            ))}
        </ select>
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
