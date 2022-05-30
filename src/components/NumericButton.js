import { Component } from 'react';
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

/**
 * props.action - Função que vai excutar a ação pretendida
 * props.text   - Texto interior do botão
 */
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
                    height: '10vh',
                    width: '10vh',
                    fontSize: '1.5vh',
                    borderWidth: '0.25vh',
                    borderRadius: '0',
                    border: 'solid',
                    borderColor: 'white',
                    fontSize: '4.5vh'
                }}
                variant='contained'
                color={color}
                onClick={() => {
                    action();
                }}
            >
                {text}
            </Button>
        );
    }
}