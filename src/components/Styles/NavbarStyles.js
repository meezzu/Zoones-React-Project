import styled from 'styled-components';
import { colors, otherColors, typography } from '../../utilities';

export const TopNavbarContainer = styled.div `
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-conetnt:space-between;
    background:${colors.darkPurple};
    border-bottom: 1px solid #E3E0E4;
    padding:16px 12px;
`

export const Logo = styled.img `
    width:100px;
    height:70px;
    margin-left:80px;
    margin-right:80px;
`

export const NavMenu = styled.div`
    display:flex;
    gap:20px;
    align-items:center;
    justify-content: space-between;

    
`

export const Time = styled.p `
    color:${otherColors.grey};
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading1};
    width:300px;
`

export const DayContainer = styled.div `
    display:flex;
    flex-direction:row;
    text-align:center;
    padding-bottom:15px;
    max-width: 140px;
    margin-left:20px;
    margin-right:20px;
`
export const DayTitle = styled.p `
    color: ${colors.white};
    background: #28122B;
    height: 38px;
    margin-top:20px;
    padding:12px 16px;
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading2};
`
export const SideNavbarContainer = styled(TopNavbarContainer)`
    &&& {
        display:flex;
        flex-direction: column;
        gap:10px;
        width:253px;
        height:100vh;
        padding:20px;
        border-right: 1px solid #E3E0E4;
        box-shadow: 0px 10px 5px rgba(97, 61, 101, 0.25);
        border-bottom: none;
    }
`

export const Label = styled.label`
  &&& {
    color:${colors.white};
    padding-left:20px
  }  
`
