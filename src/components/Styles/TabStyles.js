import styled from "styled-components";
import { colors } from "../../utilities";
import { StyledRightIconContainer } from "./InputStyles";

export const TabContainer = styled.div `
    width:55%;
    background:${colors.darkPurple};
    border:1px solid ${colors.darkPurple};
    border-radius:4px;
    height:auto;
    padding:10px;
`
export const TabLink = styled(TabContainer)`
    &&& {
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-left:30px;
        margin-top:0;
    }
`

export const CountrySelectContainer = styled(StyledRightIconContainer) `
   &&& {
    width:83%;
    border-radius:8px;
    padding:16px;
    margin-top:30px
   } 
`