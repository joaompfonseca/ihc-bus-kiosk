import { Button, Grid } from '@mui/material';
import { Component } from 'react';

class MethodButton extends Component {

    render() {
        const { action, disabled = false, image, text = '' } = this.props;

        return (
            <Button
                disabled={disabled}
                style={{
                    height: '15vh',
                    width: '20vh',
                    fontSize: '1.5vh'
                }
                }
                variant='contained'
                color='primary'
                onClick={() => {
                    action();
                }}
            >
                <Grid container align='center'>
                    <Grid item xs={12} align='center'>
                        <img src={image} width='100%'></img>
                    </Grid>
                    {text !== ''
                        ? <Grid item xs={12} marginTop='-2.5vh'>
                            {text}
                        </Grid>
                        : <></>
                    }
                </Grid>
            </Button>
        );
    }
}

export default MethodButton;
