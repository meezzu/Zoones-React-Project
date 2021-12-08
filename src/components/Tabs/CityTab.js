import React from 'react';
import { CountrySelectContainer } from '../Styles/TabStyles';
import { cities } from '../../data';
import { ButtonGreyDisabled } from '../Button/Button';

const CityTab = () => {
    return (
        <div style={{marginLeft:'60px', marginBottom:'40px'}}>
           <CountrySelectContainer>
            <option>Select City</option>
            {cities.map((city, index) => (
                <option value={city} key={index} >
                    {city}
                </option>
            ))}
        </ CountrySelectContainer>

        <div style={{marginLeft:'370px'}}>
            <ButtonGreyDisabled></ButtonGreyDisabled>
        </div>
        </div>
    )
}

export default CityTab;
