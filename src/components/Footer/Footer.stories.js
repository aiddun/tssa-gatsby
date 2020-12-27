import React from 'react';
import Footer from './Footer';

// This default export determines where your story goes in the story list
export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const F = Template.bind({});

F.args = {
  /* the args you need here will depend on your component */
};