import { Component } from 'react';
import { Button } from '@mui/material';
import { Edit } from '@mui/icons-material';

/**
 * props.action - Função que vai excutar a ação pretendida
 * props.text   - Texto interior do botão
 */
export default class FunctionButton extends Component {

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
                    height: '5vh',
                    width: '5vh',
                    fontSize: '4.5vh'
                }}
                variant='contained'
                color='info'
                onClick={() => {
                    action();
                    this.setText(<Edit />);
                }}
            >
                {text}
            </Button>
        );
    }
}