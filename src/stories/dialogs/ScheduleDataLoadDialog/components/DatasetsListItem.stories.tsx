import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatasetsListItem as DatasetsListItemComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/DatasetsListItem';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: DatasetsListItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DatasetsListItemComponent>;


const Template: ComponentStory<typeof DatasetsListItemComponent> = (args) => <DatasetsListItemComponent {...args} />;

export const DatasetsListItem = Template.bind({});

DatasetsListItem.args = {
    id: "string",
    label:"Gooddata sample data",
    checked:false,
};

export const DatasetsListItemChecked = Template.bind({});

DatasetsListItemChecked.args = {
    id: "string",
    label:"Gooddata sample data",
    checked:true,
};

