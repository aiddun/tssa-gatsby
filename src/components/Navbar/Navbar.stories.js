import React from 'react';
import Navbar from './Navbar';

// This default export determines where your story goes in the story list
export default {
  title: 'Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /* the args you need here will depend on your component */
};