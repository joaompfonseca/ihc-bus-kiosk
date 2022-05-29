import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextBox(props) {

    const {text} = props;

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="outlined-read-only-input"
                //label="Read Only"
                //defaultValue="Insert NIF here"
                label={text}
                InputProps={{
                    readOnly: true,
                }}
            />

        </Box>
    );
}
