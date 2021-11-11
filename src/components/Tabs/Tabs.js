import React, {useState} from 'react';
import { TabContainer, TabLink } from '../Styles/TabStyles';
import PersonTab from './PersonTab';
import CityTab from './CityTab';
import ZooneUserTab from './ZooneUserTab';
import "./../../App.css"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(1);
    const toggleTab = (index) => {
        setActiveTab(index)
    }
    return (
        <TabContainer>
            {/**Tab Links */}
            <TabLink>
                <button className={activeTab ===1 ? 'active-tab' : ''} onClick={()=>toggleTab(1)}>Person</button>
                <button className={activeTab ===2 ? 'active-tab' : ''} onClick={()=>toggleTab(2)}>City</button>
                <button className={activeTab ===3 ? 'active-tab' : ''} onClick={()=>toggleTab(3)}>Zoone User</button>
            </TabLink>

            {/**Tab Content*/}
            <div className='content-tabs'>
            <div className={activeTab ===1 ? 'activeContent' : 'content'}>
                <PersonTab />
            </div>
            <div className={activeTab ===2 ? 'activeContent' : 'content'}>
                <CityTab />
            </div>
            <div className={activeTab ===3 ? 'activeContent' : 'content'}>
                <ZooneUserTab />
            </div>
            </div>
        </TabContainer>
    )
}

export default Tabs;


