import React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export const TimePicker: React.FC = () => {

    return <>
        <Typography variant="subtitle2" component="div">
            Refresh data:
        </Typography>
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
        >
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={"weekly"}
                autoWidth
                variant="standard"
            >
                <MenuItem value={"weekly"}>Weekly</MenuItem>
            </Select>

            <Typography variant="subtitle2" component="div">
            on
            </Typography>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={"monday"}
                autoWidth
                variant="standard"
            >
                <MenuItem value={"sunday"}>Sunday</MenuItem>
                <MenuItem value={"monday"}>Monday</MenuItem>
                <MenuItem value={"tuesday"}>Tuesday</MenuItem>
                <MenuItem value={"wednesday"}>Wednesday</MenuItem>
                <MenuItem value={"thursday"}>Thursday</MenuItem>
                <MenuItem value={"friday"}>Friday</MenuItem>
                <MenuItem value={"saturday"}>Saturday</MenuItem>
            </Select>
            <Typography variant="subtitle2" component="div">
            at
            </Typography>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={"12:00 AM"}
                autoWidth
                variant="standard"
            >
                <MenuItem value={"12:00 AM"}>12:00 AM</MenuItem>
                <MenuItem value={"12:30 AM"}>12:30 AM</MenuItem>
                <MenuItem value={"01:00 AM"}>01:00 AM</MenuItem>
                <MenuItem value={"01:30 AM"}>01:30 AM</MenuItem>
                <MenuItem value={"02:00 AM"}>02:00 AM</MenuItem>
                <MenuItem value={"02:30 AM"}>02:30 AM</MenuItem>
                <MenuItem value={"03:30 AM"}>03:30 AM</MenuItem>
                <MenuItem value={"04:00 AM"}>04:00 AM</MenuItem>
                <MenuItem value={"04:30 AM"}>04:30 AM</MenuItem>
                <MenuItem value={"05:00 AM"}>05:00 AM</MenuItem>
                <MenuItem value={"05:30 AM"}>05:30 AM</MenuItem>
                <MenuItem value={"06:00 AM"}>06:00 AM</MenuItem>
                <MenuItem value={"06:30 AM"}>06:30 AM</MenuItem>
                <MenuItem value={"07:00 AM"}>07:00 AM</MenuItem>
                <MenuItem value={"07:30 AM"}>07:30 AM</MenuItem>
                <MenuItem value={"07:30 AM"}>08:00 AM</MenuItem>
            </Select>
        </Stack >
    </>
}