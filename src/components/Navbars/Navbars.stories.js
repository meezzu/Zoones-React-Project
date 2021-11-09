import React from 'react';
import SideNavbar from './SideNavbar/SideNavbar';
import TopNavbar from './TopNavbar/TopNavbar';

export default {
    title:'Navbars',
    component:'Navbars'
}

export const MenuBar = () => <TopNavbar />
export const SideNavBar = () => <SideNavbar />

MenuBar.stories = {
    name: 'menubar'
}

SideNavBar.stories = {
    name:'sidenavbar'
}