import styled from 'styled-components';
import { colors, otherColors, typography } from '../../utilities';


export const StyledInput = styled.input `
    background:#351C38;
    width:30%;
    padding:10px;
    padding-right:280px;
    border: 1px solid #351C38;
    border-radius:8px;
    ::placeholder {
        color:${otherColors.grey};
        &&&{
            padding-top:10px;
        }
        
    }
font-family:${typography.fontFamily};
font-weight:${typography.fontWeight.heading2};
font-size:${typography.fontSize.heading2};
margin-top:20px;

`

export const StyledDisabledInput = styled(StyledInput) `
::placeholder {
    color:${otherColors.grey};
}
&&& {
    outline: none;
    color:${colors.white}
}
   
`

export const StyledLeftIconContainer = styled.div `
    display: flex;
    margin-bottom: 15px;
    border-radius:8px;
`

export const LeftIcon = styled.img `
    background:#351C38;
    width: 10px;
    text-align: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding-left:20px;
    padding-right:20px;
    margin-top:20px;
`

export const RightIcon = styled.img `
    background:#351C38;
    width: 10px;
    text-align: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-left:20px;
    padding-right:20px;
    margin-top:20px;
`

export const StyledLeftIconInput = styled(StyledInput)`
&&& {
    outline: none;
    border-radius:0;
    font-size:${typography.fontSize.heading2};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    color:${colors.white};
    padding-top:10px;
}
`

export const StyledRightIconContainer = styled.select `
    background:#351C38;
    color:${colors.white};
    border-radius:8px;
    width:7%;
    padding:5px;
    border: 1px solid #351C38;
    margin-top:10px;
    outline:none;
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading2};
`

export const StyledRightIconInput = styled.option`
    font-size:${typography.fontSize.heading2};
    color:${colors.white}
`