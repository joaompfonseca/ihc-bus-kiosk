import { Component } from 'react';
import { Button } from '@mui/material';
import { ArrowLeft } from '@mui/icons-material';

class BackButton extends Component {

    render = () => {
        const { action, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#ed6c02',
                    height: '5vh',
                    justifyContent: (text === undefined) ? 'center' : 'left',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => {
                    action();
                }}
            >
                <ArrowLeft style={{ fontSize: '4vh', marginLeft: (text === undefined) ? '0vh' : '-1.5vh' }} />
                {text}
            </Button>
        );
    }
}

export default BackButton;