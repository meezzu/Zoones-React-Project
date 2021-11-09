import styled from 'styled-components';
import { colors, otherColors, typography } from '../../utilities';

export const TopNavbarContainer = styled.div `
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:30px;
    width:100%;
    background:${colors.darkPurple};
    margin:10px;
    height:auto
`

export const Logo = styled.img `
    width:100px;
    height:70px;
`

export const Time = styled.p `
    color:${otherColors.grey};
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading2};
`

export const DayContainer = styled.div `
    display:flex;
    flex-direction:row;
    text-align:center;
    padding-bottom:15px
`
export const DayTitle = styled.p `
    color: ${colors.white};
    background:${colors.darkPurple};
    padding-top:15px;
    padding-left:20px;
    padding-right:20px;
`
export const SideNavbarContainer = styled(TopNavbarContainer)`
    &&& {
        display:flex;
        flex-direction: column;
        gap:10px;
        width:20%;
        height:100%;
        padding:20px;
    }
`

export const Label = styled.label`
  &&& {
    color:${colors.white};
    padding-left:20px
  }  
`
