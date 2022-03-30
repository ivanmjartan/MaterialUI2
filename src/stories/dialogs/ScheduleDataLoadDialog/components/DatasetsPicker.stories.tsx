import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatasetsPicker as DatasetsPickerComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/DatasetsPicker';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: DatasetsPickerComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DatasetsPickerComponent>;


const Template: ComponentStory<typeof DatasetsPickerComponent> = (args) => <DatasetsPickerComponent {...args} />;

export const DatasetsPicker = Template.bind({});

DatasetsPicker.args = {
};
