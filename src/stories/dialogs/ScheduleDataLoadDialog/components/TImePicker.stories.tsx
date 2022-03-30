import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TimePicker as TImePickerComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/TimePicker';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: TImePickerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TImePickerComponent>;


const Template: ComponentStory<typeof TImePickerComponent> = (args) => <TImePickerComponent {...args} />;

export const TimePicker = Template.bind({});

TimePicker.args = {
};
