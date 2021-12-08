import React from 'react';
import Input, { LeftIconInput, RightIconInput } from '../Input/Input';
import Tab  from '../Tabs/Tabs';

const Dashboard = () => {
    return (
        <>
            <Input 
            type='text'
            placeholder='placeholder'
            />
            <LeftIconInput 
            type='text'
            placeholder='placeholder'
            />
            <RightIconInput />
            <Tab />
        </>
    )
}

export default Dashboard;
