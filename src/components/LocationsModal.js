import { Component } from 'react';
import { withTranslation } from "react-i18next";
import { Grid, Modal, Pagination, Typography } from '@mui/material';
import { AddButton, CloseButton } from '.';

class LocationsModal extends Component {

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    render = () => {
        const { action, close, open, location_names, t } = this.props;
        const valid_letters = location_names.map((name) => (name.charAt(0)));

        return (
            <Modal
                open={open}
                onClose={(event, reason) => {
                    if (reason && reason === 'backdropClick')
                        return;
                    close();
                }}
            >
                <Grid container className='noDivPadding' alignItems='center'
                    style={{
                        width: '50vh',
                        borderRadius: '1vh',
                        borderWidth: '0.5vh',
                        borderColor: '#1976d2',
                        borderStyle: 'solid',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Grid item xs={9.5} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('single.prompt.location')}</Typography>
                    </Grid>
                    <Grid item xs={2.5} align='right'>
                        <CloseButton action={() => { close(); }} />
                    </Grid>
                    <Grid item xs={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography align='center'>
                            {this.letters.map((letter) => (
                                valid_letters.includes(letter)
                                    ? (<span><b>{letter + ' '}</b></span>)
                                    : <span style={{ color: 'gray' }}>{letter + ' '}</span>
                            ))}
                        </Typography>
                        <hr />
                    </Grid>
                    {location_names.map((name) => (
                        <Grid container alignItems='center' marginBottom='1vh'>
                            <Grid item xs={2.5} align='left'>
                                <AddButton action={() => action(name)} />
                            </Grid>
                            <Grid item xs={9.5}>
                                <Typography variant='h3' align='left'>
                                    {name}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item xs={12}
                        display='flex'
                        justifyContent='center'>
                        <Pagination count={1} />
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

export default withTranslation('common')(LocationsModal);