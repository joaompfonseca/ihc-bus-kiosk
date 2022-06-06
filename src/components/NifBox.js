import { Component } from 'react';
import { Grid, Typography } from '@mui/material';

class NifBox extends Component {

    render() {
        const { text } = this.props

        return (
            <Grid container
                style={{
                    height: '5vh',
                    width: '12vh',
                    paddingInline: '0.5vh',
                    borderRadius: '0.5vh',
                    borderWidth: '0.3vh',
                    borderColor: '#1976d2',
                    borderStyle: 'solid',
                }}>
                <Typography variant='h3' fontWeight='bold'>{text}</Typography>
            </Grid>)
    }
}

export default NifBox;