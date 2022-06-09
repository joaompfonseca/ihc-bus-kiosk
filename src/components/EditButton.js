import { Component } from 'react';
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

class EditButton extends Component {

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
                <Edit style={{ fontSize: '3vh' }} />
            </Button>
        );
    }
}

export default EditButton;