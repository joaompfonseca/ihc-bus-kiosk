import { Component } from 'react';
import { Button } from '@mui/material';

class LargeButton extends Component {

    render = () => {
        const { action = () => { }, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#1976d2',
                    height: '10vh',
                    width: '15vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => {
                    action();
                }}
            >
                {text}
            </Button>
        );
    }
}

export default LargeButton;