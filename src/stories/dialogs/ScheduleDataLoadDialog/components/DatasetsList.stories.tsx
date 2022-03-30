import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatasetsList as DatasetsListComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/DatasetsList';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: DatasetsListComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DatasetsListComponent>;


const Template: ComponentStory<typeof DatasetsListComponent> = (args) => <DatasetsListComponent {...args} />;

export const DatasetsList = Template.bind({});

DatasetsList.args = {
};
