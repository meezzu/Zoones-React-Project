import React from 'react';
import Input, { DisabledInput, LeftIconInput, RightIconInput } from './Input';


export default {
    title:'Input',
    component:Input
}

const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
    type:'text',
    placeholder: 'Placeholder',
  };


export const LeftIcon = (args) => <LeftIconInput {...args} />;
    LeftIcon.args = {
    type:'text',
    placeholder: 'Placeholder',
  };


export const RightIcon = (args) => <RightIconInput {...args} />;
    RightIcon.args = {
        type:'text',
        placeholder: '24 hours',
    };


export const Disabled = (args) => <DisabledInput {...args}/>;
Disabled.args = {
    type:'text',
    placeholder: '24 hours',
  };