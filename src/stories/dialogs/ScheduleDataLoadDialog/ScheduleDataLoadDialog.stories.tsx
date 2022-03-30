import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ScheduleDataLoadDialog } from '../../../dialogs/ScheduleDataLoadDialog/ScheduleDataLoadDialog';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog',
  component: ScheduleDataLoadDialog,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ScheduleDataLoadDialog>;


const Template: ComponentStory<typeof ScheduleDataLoadDialog> = (args) => <ScheduleDataLoadDialog {...args} />;

export const FullDialog = Template.bind({});

FullDialog.args = {
};
