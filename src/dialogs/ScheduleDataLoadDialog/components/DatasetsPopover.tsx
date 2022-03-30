import React from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { DatasetsList } from './DatasetsList';

export interface IDatasetsPopoverProps {
    disabled: boolean;
}

export const DatasetsPopover = (props: IDatasetsPopoverProps) => {
    const { disabled } = props;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);;
    const id = open ? 'simple-popover' : undefined;
    const icon = open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />;
    return <>
        <Button
            variant="contained"
            endIcon={icon}
            onClick={handleClick}
            disabled={disabled}
        >
            1 of 1
        </Button>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <DatasetsList />
        </Popover>
    </>
}