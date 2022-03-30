import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DialogContent as DialogContentComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/DialogContent';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: DialogContentComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DialogContentComponent>;


const Template: ComponentStory<typeof DialogContentComponent> = (args) => <DialogContentComponent {...args} />;

export const DialogContent = Template.bind({});

DialogContent.args = {
};
