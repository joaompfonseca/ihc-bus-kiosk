import { Component } from 'react';
import { Button, Typography } from '@mui/material';

export default class NumericButton extends Component {

    state = {
        text: this.props.text
    }

    setText(text) {
        this.setState({ text: text });
    }

    render() {
        const { action, color, disabled = false } = this.props;
        const { text } = this.state;

        return (
            <Button
                disabled={disabled}
                style={{
                    backgroundColor: color,
                    height: '10vh',
                    width: '10vh',
                    borderWidth: '0.25vh',
                    borderRadius: '0',
                    border: 'solid',
                    borderColor: 'white'
                }}
                variant='contained'
                onClick={() => {
                    action();
                }}
            >
                <Typography variant='h1' fontWeight='bold'>{text}</Typography>
            </Button>
        );
    }
}