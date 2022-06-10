import { Component } from 'react';
import { Button } from '@mui/material';

class RedButton extends Component {

    render = () => {
        const { action = () => { }, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#d32f2f',
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

export default RedButton;