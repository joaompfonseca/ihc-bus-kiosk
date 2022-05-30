import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Backspace } from '@mui/icons-material';
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton, IgnoreButton, NifBox } from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";

class NifPage extends Component {

    state = {
        nif: ''
    }

    bigSteps = {
        single: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.tickets.single')}</Typography>, this.props.goto('operation')],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.single')}</Typography>, this.props.goto('single')]
        ],
        renew: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.passes.renew')}</Typography>, this.props.goto('operation')],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.renew')}</Typography>, this.props.goto('renew')]
        ]
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

    render() {
        const { t, goto, data } = this.props;
        const { prev_page } = data;
        const { nif } = this.state;

        return (
            <>
                <Grid container>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={this.getBigSteps()}
                            smallSteps={[
                                <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.nif')}</Typography>,
                                <Typography>{t('progress.smallStep.payment')}</Typography>
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <h1>{t('payment.nif.prompt')}</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <NifBox text={nif}></NifBox>
                    </Grid>
                    <Grid item xs={12} align='center' marginBottom='-2vh'>
                        <NumericButton text='7' color='primary' action={() => { this.addDigit('7') }} />
                        <NumericButton text='8' color='primary' action={() => { this.addDigit('8') }} />
                        <NumericButton text='9' color='primary' action={() => { this.addDigit('9') }} />
                    </Grid>
                    <Grid item xs={12} align='center' marginBottom='-2vh'>
                        <NumericButton text='4' color='primary' action={() => { this.addDigit('4') }} />
                        <NumericButton text='5' color='primary' action={() => { this.addDigit('5') }} />
                        <NumericButton text='6' color='primary' action={() => { this.addDigit('6') }} />
                    </Grid>
                    <Grid item xs={12} align='center' marginBottom='-2vh'>
                        <NumericButton text='1' color='primary' action={() => { this.addDigit('1') }} />
                        <NumericButton text='2' color='primary' action={() => { this.addDigit('2') }} />
                        <NumericButton text='3' color='primary' action={() => { this.addDigit('3') }} />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <NumericButton disabled/>
                        <NumericButton text='0' color='primary' action={() => { this.addDigit('0') }} />
                        <NumericButton text={<Backspace />} color='warning' action={() => { this.removeDigit() }} />
                    </Grid>
                    <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                        <Grid item xs={4} align='left'>
                            <BackButton text={t('button.back')} back={goto(prev_page)} />
                        </Grid>
                        <Grid item xs={4} align='center'>
                            <IgnoreButton action={goto('paymentMethods')} />
                        </Grid>
                        <Grid item xs={4} align='right'>
                            <ContinueButton text={t('button.continue')} action={goto('paymentMethods')} />
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(NifPage);


/*export default function NifPage(props) {
    const { t } = useTranslation('common');

    setNif = (text) => e => {
        this.setState({ nif: text });
    }

    const {nif} = this.state;

    return (
            <Grid container>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.nif')}</Typography>,
                            <Typography>{t('progress.smallStep.payment')}</Typography>
                        ]}
                    />
                </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('payment.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={12} align='center'>
                    <TextField></TextField>
                </Grid>
                <Grid item xs={12} align='center'>
                    <NumericButton item text='7' align='left'></NumericButton>
                    <NumericButton item text='8' align='center'></NumericButton>
                    <NumericButton item text='9' align='right'></NumericButton>
                    <NumericButton item text='4' align='left'></NumericButton>
                    <NumericButton item text='5' align='center'></NumericButton>
                    <NumericButton item text='6' align='right'></NumericButton>
                    <NumericButton item text='1' align='left'></NumericButton>
                    <NumericButton item text='2' align='center'></NumericButton>
                    <NumericButton item text='3' align='right'></NumericButton>
                    <NumericButton item text='0' align='center'></NumericButton>
                    <NumericButton item text='Backspace' align='right'></NumericButton>
                </Grid>
                <Grid item xs={12} align ='right' bottom='2vh'>
                    <ContinueButton text={t('payment.continue')} back={props.goto('nif')} />
                </Grid>
            </Grid>

    );

}*/