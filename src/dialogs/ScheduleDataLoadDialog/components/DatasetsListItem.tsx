import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export interface IDatasetsListItemProps {
    id:string;
    label:string;
    checked:boolean;
}

export const DatasetsListItem: React.FC<IDatasetsListItemProps> = (props) => {
    const {id, label, checked} = props;

    return (
        <ListItem
            key={id}
            disablePadding
        >
            <ListItemButton role={undefined}>
                <ListItemIcon>
                    <Checkbox
                        checked={checked}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': id }}
                    />
                </ListItemIcon>
                <ListItemText id={id} primary={label} />
            </ListItemButton>
        </ListItem>
    );
}