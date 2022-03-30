import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogContent as ScheduleDataLoadDialogContent } from "./components/DialogContent"

export interface IScheduleDataLoadDialogProps {
    // open: boolean;
}

export const ScheduleDataLoadDialog = (props: IScheduleDataLoadDialogProps) => {

    return <Dialog
            open={true}
            // onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Schedule a data load"}
            </DialogTitle>
            <DialogContent>
                <ScheduleDataLoadDialogContent />
            </DialogContent>
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
                    Schedule load
                </Button>
            </DialogActions>
        </Dialog>
}