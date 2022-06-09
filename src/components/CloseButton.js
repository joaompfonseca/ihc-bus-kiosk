import { Component } from 'react';
import { Button } from '@mui/material';
import { Close } from '@mui/icons-material';

class CloseButton extends Component {

    render = () => {
        const { action = () => { }, disabled = false } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#ed6c02',
                    height: '5vh',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => { action(); }}
            >
                <Close style={{ fontSize: '4vh' }} />
            </Button>
        );
    }
}

export default CloseButton;