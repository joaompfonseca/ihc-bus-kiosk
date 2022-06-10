import { Component } from 'react';
import { Button } from '@mui/material';

class GreenButton extends Component {

    render = () => {
        const { action = () => { }, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#2e7d32',
                    height: '5vh',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => { action(); }}
            >
                {text}
            </Button>
        );
    }
}

export default GreenButton;