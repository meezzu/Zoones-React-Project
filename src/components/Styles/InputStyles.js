import styled from 'styled-components';
import { colors, otherColors, typography } from '../../utilities';



export const StyledInput = styled.input `
    background:#351C38;
    width:476px;
    height:14px;
    padding:16px;
    border: 1px solid #351C38;
    border-radius:8px;
    ::placeholder {
        color:${otherColors.grey};
        &&&{
            padding-top:10px;
        }   
    }

    &&& {
        outline: none;
        color:${colors.white}
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
    border-radius:4px;
`

export const LeftIcon = styled.img `
    background:#351C38;
    width: 24px;
    text-align: center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 8px 2px 6px 10px;
    margin-top:20px;
`

export const RightIcon = styled.img `
    background:#351C38;
    width: 34px;
    text-align: center;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 8px 2px 6px 10px;
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
    padding-top:16px;
}
`

export const StyledRightIconContainer = styled.select `
    background:#351C38;
    color:${colors.white};
    border-radius:8px;
    width:106px;
    padding:12px 16px 12px 16px;
    border: 1px solid #351C38;
    margin-top:10px;
    outline:none;
    font-family:${typography.fontFamily};
    font-weight:${typography.fontWeight.heading2};
    font-size:${typography.fontSize.heading2};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;   
    &:hover{
        cursor: pointer;
    }
    &:after{
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
    }
   &&&{
    option {
        font-size:${typography.fontSize.heading2};
        color:${colors.white};
        background:${colors.darkPurple};
      }
   } 
   
`