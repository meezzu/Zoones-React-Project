import React,{useState} from 'react';
import Button from '../../Button/Button';
import { PlusIconStyle, StyledButton} from '../../Styles/ButtonStyles'
import {Label, SideNavbarContainer} from '../../Styles/NavbarStyles'
import UserIcon from '../../Assets/users-solid.svg';
import ArrowDownIcon from '../../Assets/angle-down-solid.svg';
import ArrowUpIcon from '../../Assets/angle-up-solid.svg';
import CityIcon from '../../Assets/city-solid.svg';
import SettingIcon from '../../Assets/cog-solid.svg';
import PlusIcon from '../../Assets/plus-solid.svg'

const SideNavbar = () => {
    const [showPeopleContent, setShowPeopleContent] = useState(false);
    const [showCitiesContent, setShowCitiesContent] = useState(false);
    const displayPeopleContent = () => {
        setShowPeopleContent(!showPeopleContent)
    };
    const displayCitiesContent = () => {
        setShowCitiesContent(!showCitiesContent)
    };

    return (
        <SideNavbarContainer>
           <StyledButton>
                <PlusIconStyle src={PlusIcon} alt='plus-icon' />
                   Add New
            </StyledButton>  
           <div style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'20px'}}>
               <PlusIconStyle src={UserIcon} alt='' />
               <p style={{color:'#fff', fontSize:'16px'}}>My People</p>
               {!showPeopleContent ?  
               (<PlusIconStyle src={ArrowDownIcon} alt='' onClick={displayPeopleContent} />)
                : 
                (<PlusIconStyle src={ArrowUpIcon} alt='' onClick={displayPeopleContent} />)
                 } 
           </div>
           <div style={{display: showPeopleContent ? 'block' : 'none', paddingRight:'80px'}}>
           <input type='checkbox' value='Me' checked /> 
                    <Label htmlFor='Me'>Me</Label>
                    <br />
                    <input type='checkbox' value='' /> 
                    <Label htmlFor='Me'>Me</Label>
                    <br />
                    <input type='checkbox' value='' />
                    <Label htmlFor='Me'>Me</Label>
            </div> 

           <div style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'20px'}}>
               <PlusIconStyle src={CityIcon} alt='' />
               <p style={{color:'#fff', fontSize:'16px'}}>My Cities</p>
               {!showCitiesContent ?  
               (<PlusIconStyle src={ArrowDownIcon} alt='' onClick={displayCitiesContent} /> )
                : 
                (<PlusIconStyle src={ArrowUpIcon} alt='' onClick={displayCitiesContent} />)
                 } 
           </div>

           <div style={{display: showCitiesContent ? 'block' : 'none', paddingRight:'80px'}}>
                    <input type='checkbox' value='Me' checked/> 
                    <Label htmlFor='Me'>Me</Label>
                    <br />
                    <input type='checkbox' value='' /> 
                    <Label htmlFor='Me'>Me</Label>
                    <br />
                    <input type='checkbox' value='' />
                    <Label htmlFor='Me'>Me</Label>
                </div>

           <footer style={{display:'flex', flexDirection:'row', alignItems:'center',gap:'20px', paddingRight:'120px', paddingTop:'200px'}}>
               <PlusIconStyle src={SettingIcon} alt='' />
               <p style={{color:'#fff', fontSize:'16px'}}>Settings</p>
           </footer>
        </SideNavbarContainer>
    )
}

export default SideNavbar;
