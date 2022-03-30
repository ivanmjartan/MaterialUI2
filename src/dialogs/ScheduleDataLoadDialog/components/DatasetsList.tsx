import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import { DatasetsListItem } from './DatasetsListItem';
import Divider from '@mui/material/Divider';

const items = [
    "Gooddata sample data",
    "Other sample data",
    "Sample data",
];



export const DatasetsList: React.FC = () => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} dense>
                <ListItem>
                    <TextField
                        id="standard-basic"
                        fullWidth
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </ListItem>
                <DatasetsListItem id={"all"} label={"All"} checked/>
                <Divider variant="middle" />

                {items.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return <DatasetsListItem id={labelId} label={value} checked/>;
                })}

                <Divider variant="middle" />

                <DialogActions>
                    <Button
                        variant="outlined"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        autoFocus
                    >
                        Apply
                    </Button>
                </DialogActions>
            </List>
        </>
    );
}