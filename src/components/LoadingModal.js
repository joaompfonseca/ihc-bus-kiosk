import { Component } from 'react';
import { CircularProgress, Grid, Modal, Typography } from '@mui/material';

class LoadingModal extends Component {

    render = () => {
        const { open, text } = this.props;

        return (
            <Modal
                open={open}
                onClose={() => { }}
            >
                <Grid container className='noDivPadding' alignItems='center'
                    style={{
                        width: '30vh',
                        borderRadius: '1vh',
                        borderWidth: '0.5vh',
                        borderColor: '#1976d2',
                        borderStyle: 'solid',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Grid item xs={2}>
                        <CircularProgress />
                    </Grid>
                    <Grid item xs={10} align='center'>
                        <Typography variant='h3' fontWeight='bold'>{text}</Typography>
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

export default LoadingModal;