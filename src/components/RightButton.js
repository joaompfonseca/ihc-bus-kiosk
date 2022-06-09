import { Component } from 'react';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

class RightButton extends Component {

    render = () => {
        const { action = () => { }, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#1976d2',
                    height: '5vh',
                    justifyContent: (text === undefined) ? 'center' : 'right',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => { action(); }}
            >
                {text}
                <ArrowForward style={{ fontSize: '4vh', marginRight: (text === undefined) ? '0vh' : '-1.5vh'  }} />
            </Button>
        );
    }
}

export default RightButton;