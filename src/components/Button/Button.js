import React from 'react';
import PlusIcon from '../Assets/plus-solid.svg'
import { StyledButton, StyledLightDisabled, StyledGreyDisabled, PlusIconStyle } from '../Styles/ButtonStyles';


const Button = ({onClick, children}) => {
    return (
            <StyledButton onClick={onClick}>
            <PlusIconStyle src={PlusIcon} alt='plus-icon' />
                {children}
                </StyledButton>  
    )
}

export const ButtonLightDisabled = ({onClick}) => {
    return(
        <StyledLightDisabled onClick={onClick}>Disabled</StyledLightDisabled>
    )
};

export const ButtonGreyDisabled = ({onClick}) => {
    return (
        <StyledGreyDisabled onClick={onClick}>Disabled</StyledGreyDisabled>
    )
}

export default Button;
