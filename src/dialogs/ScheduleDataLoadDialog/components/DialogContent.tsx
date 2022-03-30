import Divider from '@mui/material/Divider';
import React from 'react';
import { DatasetsPicker } from './DatasetsPicker';
import { DataSourceHeader } from './DataSourceHeader';
import { TimePicker } from './TimePicker';

export const DialogContent:React.FC = () => {

    return <>
        <DataSourceHeader />
        <Divider variant="fullWidth" sx={{ marginBottom: 1 }} />
        <DatasetsPicker />
        <Divider variant="fullWidth" sx={{ marginBottom: 1 }} />
        <TimePicker />
    </>;
}