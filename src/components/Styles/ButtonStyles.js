import styled from 'styled-components';
import { colors, otherColors, typography } from '../../utilities';

export const StyledDefaultButton = styled.button `
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10px;
    color:${colors.darkPurple};
    background:${colors.cream};
    border-radius:8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding:17px;
    width:130px;
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading2};
    cursor:pointer;
    margin-top:40px;
    :hover {
        background:${colors.cream};
        color:${colors.darkPurple};
    }
`

export const StyledLightDisabled = styled(StyledDefaultButton)`
    &&& {
        color:${colors.cream};
        background:${colors.darkPurple};
    }
`

export const StyledGreyDisabled = styled(StyledDefaultButton)`
    &&& {
        color:${otherColors.grey};
        background:#351C38;
    }
`
export const StyledButton = styled(StyledDefaultButton) `
    &&& {
        background:${colors.cream};
        border:1px solid ${colors.cream};
        margin-left:46px;
        margin-right:47px;
        margin-top:72px;
        margin-bottom:49px;
    }
`

export const PlusIconStyle = styled.img `
    width:14px;
    height:14px;
    cursor:pointer;
    
`