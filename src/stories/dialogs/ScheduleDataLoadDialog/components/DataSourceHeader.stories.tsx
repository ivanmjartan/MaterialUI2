import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataSourceHeader as DataSourceHeaderComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/DataSourceHeader';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: DataSourceHeaderComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DataSourceHeaderComponent>;


const Template: ComponentStory<typeof DataSourceHeaderComponent> = (args) => <DataSourceHeaderComponent {...args} />;

export const DataSourceHeader = Template.bind({});

DataSourceHeader.args = {
};
