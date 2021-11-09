import React from 'react';
import Input, { LeftIconInput, RightIconInput } from '../Input/Input';

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
        </>
    )
}

export default Dashboard;
