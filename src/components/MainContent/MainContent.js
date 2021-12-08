import React from'react';
import './MainContent.scss'
import MainDisplay from '../MainDisplay/MainDisplay';
import SideNavbar from '../Navbars/SideNavbar/SideNavbar'

const MainContent = (props) =>{
    return(
        <div className='maincontent'>
            <SideNavbar/>
            <MainDisplay />
        </div>
    )
}
export default MainContent;