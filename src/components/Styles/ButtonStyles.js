import styled from 'styled-components';
import { colors, otherColors, typography } from '../../utilities';

export const StyledButton = styled.button `
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    color:${colors.darkPurple};
    background:${colors.cream};
    border-radius:4px;
    border:1px solid ${colors.cream};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding:10px;
    width:150px;
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading2};
    cursor:pointer;
    margin-top:40px;
`

export const StyledLightDisabled = styled(StyledButton)`
    &&& {
        color:${colors.white};
        background:${colors.darkPurple};
    }
`

export const StyledGreyDisabled = styled(StyledButton)`
    &&& {
        color:${otherColors.grey};
        background:${colors.darkPurple};
    }
`

export const PlusIconStyle = styled.img `
    width:14px;
    height:14px;
    cursor:pointer;
`