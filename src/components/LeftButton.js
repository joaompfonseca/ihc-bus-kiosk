import { Component } from 'react';
import { Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

class LeftButton extends Component {

    render = () => {
        const { action, disabled = false, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#1976d2',
                    height: '5vh',
                    justifyContent: (text === undefined) ? 'center' : 'left',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => { action(); }}
            >
                <ArrowBack style={{ fontSize: '4vh', marginLeft: (text === undefined) ? '0vh' : '-1.5vh' }} />
                {text}
            </Button>
        );
    }
}

export default LeftButton;