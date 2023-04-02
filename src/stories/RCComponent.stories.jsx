import React from 'react';
import { RCComponent } from '..';

export default {
  title: 'UI/RCComponent',
  component: RCComponent,
  parameters: {
    componentSource: {
      component: 'RCComponent',
    },
  },
};

const Template = (args) => <RCComponent {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  host: 'http://localhost:3000',
  roomId: 'GENERAL',
  moreOpts: true,
  channelName: 'general',
  anonymousMode: true,
  headerColor: 'white',
  toastBarPosition: 'bottom-end',
  showRoles: true,
  showAvatar: false,
};
export const WithThreads = Template.bind({});
WithThreads.args = {
  host: 'http://localhost:3000',
  roomId: 'GENERAL',
  moreOpts: true,
  channelName: 'general',
  anonymousMode: true,
  headerColor: 'white',
  toastBarPosition: 'bottom-end',
  showRoles: true,
  showAvatar: false,
  enableThreads: true,
};
