import React from 'react';
import { cities } from '../../data';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { StyledRightIconInput } from '../Styles/InputStyles';
import { CountrySelectContainer } from '../Styles/TabStyles';

const PersonTab = () => {
    return (
        <div style={{marginLeft:'40px', marginBottom:'40px'}}>
           <Input type='text' placeholder='Type a name' />
           <CountrySelectContainer>
            <StyledRightIconInput defaultChecked>Select City</StyledRightIconInput>
            {cities.map((city, index) => (
                <StyledRightIconInput value={city} key={index} >
                    {city}
                </StyledRightIconInput>
            ))}
        </ CountrySelectContainer>

        <div style={{marginLeft:'340px'}}>
            <Button>Add New</Button>
        </div>
        </div>
    )
}

export default PersonTab;
