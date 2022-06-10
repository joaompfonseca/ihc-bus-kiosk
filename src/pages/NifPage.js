import { Grid, Typography } from "@mui/material";
import { Backspace } from '@mui/icons-material';
import { Component } from "react";
import { Progress, BackButton, ContinueButton, IgnoreButton, LoseInfoModal, NifBox, NumericButton } from "../components";
import { withTranslation } from "react-i18next";

class NifPage extends Component {

    state = {
        lose_info_action: () => { },
        lose_info_modal: false,
        nif: (this.props.data?.nif === undefined) ? '' : this.props.data.nif
    }

    bigSteps = {
        single: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.tickets.single')}</Typography>, () => { this.setLoseInfoAction(() => { this.props.goto('operation', { ...this.props.data, nif: this.state.nif }); }); this.setLoseInfoModal(true); }],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.single')}</Typography>, () => { this.props.goto('single', { ...this.props.data, nif: this.state.nif }); }]
        ],
        renew: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.passes.renew')}</Typography>, () => { this.setLoseInfoAction(() => { this.props.goto('operation', { ...this.props.data, nif: this.state.nif }); }); this.setLoseInfoModal(true); }],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.renew')}</Typography>, () => { this.props.goto('renew', { ...this.props.data, nif: this.state.nif }); }]
        ]
    }

    setLoseInfoAction = (action) => {
        this.setState({
            lose_info_action: action
        })
    }

    setLoseInfoModal = (bool) => {
        this.setState({
            lose_info_modal: bool
        })
    }

    setNif = (nif) => {
        this.setState({
            nif: nif
        });
    }

    addDigit = (digit) => {
        const { nif } = this.state;
        if (nif.length < 9)
            this.setNif(nif + digit);
    }

    removeDigit = () => {
        const { nif } = this.state;
        this.setNif(nif.substring(0, nif.length - 1));
    }

    getBigSteps = () => {
        const { data } = this.props;
        const { prev_page } = data;
        const bigSteps = this.bigSteps;
        return bigSteps[prev_page];
    }

    render = () => {
        const { t, goto, data } = this.props;
        const { prev_page } = data;
        const { lose_info_action, lose_info_modal, nif } = this.state;

        return (
            <>
                <LoseInfoModal
                    action={() => { lose_info_action() }}
                    close={() => { this.setLoseInfoModal(false); }}
                    open={lose_info_modal}
                />
                <Grid container>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={this.getBigSteps()}
                            smallSteps={[
                                <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.nif')}</Typography>,
                                <Typography>{t('progress.smallStep.paymentMethod')}</Typography>,
                                <Typography>{t('progress.smallStep.transaction')}</Typography>,
                                <Typography>{t('progress.smallStep.finish')}</Typography>
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('nif.prompt.insert')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <NifBox text={nif}></NifBox>
                    </Grid>
                    <Grid item xs={12} align='center' marginBottom='-2vh'>
                        <NumericButton text='7' color='#1976d2' action={() => { this.addDigit('7') }} />
                        <NumericButton text='8' color='#1976d2' action={() => { this.addDigit('8') }} />
                        <NumericButton text='9' color='#1976d2' action={() => { this.addDigit('9') }} />
                    </Grid>
                    <Grid item xs={12} align='center' marginBottom='-2vh'>
                        <NumericButton text='4' color='#1976d2' action={() => { this.addDigit('4') }} />
                        <NumericButton text='5' color='#1976d2' action={() => { this.addDigit('5') }} />
                        <NumericButton text='6' color='#1976d2' action={() => { this.addDigit('6') }} />
                    </Grid>
                    <Grid item xs={12} align='center' marginBottom='-2vh'>
                        <NumericButton text='1' color='#1976d2' action={() => { this.addDigit('1') }} />
                        <NumericButton text='2' color='#1976d2' action={() => { this.addDigit('2') }} />
                        <NumericButton text='3' color='#1976d2' action={() => { this.addDigit('3') }} />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <NumericButton disabled />
                        <NumericButton text='0' color='#1976d2' action={() => { this.addDigit('0') }} />
                        <NumericButton text={<Backspace />} color='#ed6c02' action={() => { this.removeDigit() }} />
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={4} align='left'>
                        <BackButton text={t('button.back')} action={() => { goto(prev_page, { ...data, nif: nif }); }} />
                    </Grid>
                    <Grid item xs={4} align='center'>
                        <IgnoreButton action={() => { goto('paymentMethods', { ...data, nif: nif }); }} />
                    </Grid>
                    <Grid item xs={4} align='right'>
                        <ContinueButton text={t('button.continue')} action={() => { goto('paymentMethods', { ...data, nif: nif }); }} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(NifPage);