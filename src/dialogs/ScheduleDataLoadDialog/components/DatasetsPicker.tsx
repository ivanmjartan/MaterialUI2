import React from 'react';
import Stack from '@mui/material/Stack';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { DatasetsPopover } from './DatasetsPopover';
import Typography from '@mui/material/Typography';

export interface IDatasetsPickerProps {
    // open: boolean;
}

export const DatasetsPicker = (props: IDatasetsPickerProps) => {
    const [value, setValue] = React.useState('all');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return <>
        <Typography variant="subtitle2" component="div">
            Load data to:
        </Typography>
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value="all" control={<Radio />} label="All mapped datasets" />
                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                >
                    <FormControlLabel value="selected" control={<Radio />} label="Selected datasets" />
                    <DatasetsPopover disabled={value === "all" ? true : false} />

                </Stack>
            </RadioGroup>
        </Stack >
    </>
}