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
        const { action } = this.props;
        const { text } = this.state;

        return (
            <Button
                style={{
                    height: '8vh',
                    width: '15vh',
                    fontSize: '1.5vh', 
                    border: "solid"
                }}
                variant='contained'
                color='info'
                onClick={() => {
                    action();
                }}
            >
                {text}
            </Button>
        );
    }
}