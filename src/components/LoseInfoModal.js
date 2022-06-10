import { Component } from 'react';
import { withTranslation } from "react-i18next";
import { Grid, Modal, Typography } from '@mui/material';
import { GreenButton, RedButton } from '.';

class LoseInfoModal extends Component {

    render = () => {
        const { action, close, open, t } = this.props;

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
                        width: '40vh',
                        borderRadius: '1vh',
                        borderWidth: '0.5vh',
                        borderColor: '#d32f2f',
                        borderStyle: 'solid',
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h3' fontWeight='bold'>{t('loseInfo.description')}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <hr />
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <GreenButton text={t('button.yes')} action={() => { action(); }}/>
                    </Grid>
                    <Grid item xs={6} align='center'>
                        <RedButton text={t('button.no')} action={() => { close(); }} />
                    </Grid>
                </Grid>
            </Modal>
        );
    }
}

export default withTranslation('common')(LoseInfoModal);