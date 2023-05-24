import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button
} from "@mui/material";
import React, {
    useState,
    useEffect
} from "react";


export default function VideoPop({open}) {
    useEffect(() => {}, []);
    return(
        <Dialog open={open}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <p>hola</p>
            </DialogContent>
        </Dialog>
    );
}