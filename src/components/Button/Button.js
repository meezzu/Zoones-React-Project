import React from 'react';
import { StyledDefaultButton, StyledLightDisabled, StyledGreyDisabled} from '../Styles/ButtonStyles';


const Button = ({onClick, children}) => {
    return (
            <StyledDefaultButton onClick={onClick}>{children}</StyledDefaultButton>  
    )
}

export const ButtonLightDisabled = ({onClick, children}) => {
    return(
        <StyledLightDisabled onClick={onClick}>{children}</StyledLightDisabled>
    )
};

export const ButtonGreyDisabled = ({onClick}) => {
    return (
        <StyledGreyDisabled onClick={onClick}>Disabled</StyledGreyDisabled>
    )
}

export default Button;
