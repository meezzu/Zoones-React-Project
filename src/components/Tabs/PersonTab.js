import React from 'react';
import { cities } from '../../data';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { CountrySelectContainer } from '../Styles/TabStyles';

const PersonTab = () => {
    return (
        <div style={{marginLeft:'40px', marginBottom:'40px'}}>
           <Input type='text' placeholder='Type a name' />
           <CountrySelectContainer>
            <option>Select City</option>
            {cities.map((city, index) => (
                <option value={city} key={index} >
                    {city}
                </option>
            ))}
        </ CountrySelectContainer>

        <div style={{marginLeft:'370px'}}>
            <Button>Add New</Button>
        </div>
        </div>
    )
}

export default PersonTab;
