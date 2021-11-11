import React from 'react';
import Button, { ButtonLightDisabled, ButtonGreyDisabled } from './Button';
import { action } from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';

export default {
    title:'Button',
    component:Button
};

export const Default = () => {
    const title = text('Title', 'Add New');
    return (
        <Button onClick={action('Button was clicked')}>{title}</Button>
    )
}

export const LightDisabled = () => {
    const lightDisabledTitle = text('LightDisabledTitle', 'Disabled');
    return (
        <ButtonLightDisabled onClick={action('Button was clicked')}>{lightDisabledTitle}</ButtonLightDisabled>
    );
}

export const GreyDisabled = () => <ButtonGreyDisabled onClick={action('Button was clicked')} />


Default.stories = {
    name:'default'
}

LightDisabled.stories ={
    name:'lightDisabled'
}

GreyDisabled.stories = {
    name:'greyDisabled'
}