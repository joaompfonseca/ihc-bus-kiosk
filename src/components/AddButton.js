import { Component } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';

class AddButton extends Component {

    render = () => {
        const { action = () => { }, disabled = false } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#1976d2',
                    height: '5vh',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => { action(); }}
            >
                <Add style={{ fontSize: '4vh' }} />
            </Button>
        );
    }
}

export default AddButton;