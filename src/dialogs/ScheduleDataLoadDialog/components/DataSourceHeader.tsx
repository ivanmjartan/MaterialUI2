import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import logo from "../../../assets/Snowflakelogo.png";

export interface IDataSourceHeaderProps {
    // open: boolean;
}

export const DataSourceHeader = (props: IDataSourceHeaderProps) => {
    return <><Stack
        direction="row"
        alignItems="center"
        spacing={2}
    >
        <Typography variant="subtitle2" component="div">
            Load data from:
        </Typography>
        <img
            width={150}
            src={logo}
            alt="logo"
        />
    </Stack>
    </>
}