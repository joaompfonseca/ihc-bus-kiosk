import { Button } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { Component } from 'react';

class ContinueButton extends Component {

    render = () => {
        const { action, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#2e7d32',
                    height: '5vh',
                    justifyContent: (text == undefined) ? 'center' : 'right',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => {
                    action();
                }}
            >
                {text}
                <ArrowRight style={{ fontSize: '4vh', marginRight: (text == undefined) ? '0vh' : '-1.5vh' }} />
            </Button>
        );
    }
}

export default ContinueButton;