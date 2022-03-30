import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatasetsPopover as DatasetsPopoverComponent } from '../../../../dialogs/ScheduleDataLoadDialog/components/DatasetsPopover';


export default {
  title: 'Design system/dialogs/ScheduleDataLoadDialog/components',
  component: DatasetsPopoverComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DatasetsPopoverComponent>;


const Template: ComponentStory<typeof DatasetsPopoverComponent> = (args) => <DatasetsPopoverComponent {...args} />;

export const DatasetsPopover = Template.bind({});

DatasetsPopover.args = {
    disabled: false
};

export const DatasetsPopoverDisabled = Template.bind({});

DatasetsPopoverDisabled.args = {
    disabled: true
};
