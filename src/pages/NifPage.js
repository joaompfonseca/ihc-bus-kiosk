import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton } from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import TextBox from "../components/TextBox";


class NifPage extends Component {

    state = {
        nif: ''
    }

    setNif = (nif) => {
        this.setState({
            nif: nif
        });
    }

    addDigit = (digit) => {
        const { nif } = this.state;
        this.setNif(nif + digit);
    }

    removeDigit = () => {
        const { nif } = this.state;
        this.setNif(nif.substring(0, nif.length - 1));
    }


    render() {
        const { t, goto } = this.props;
        const { nif } = this.state;

        return (
            <>
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
                        <h1>{t('payment.nif.prompt')}</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <TextBox text={nif}></TextBox>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <NumericButton item text='7' action={() => {this.addDigit('7')}} align='left'></NumericButton>
                        <NumericButton item text='8' action={() => {this.addDigit('8')}} align='center'></NumericButton>
                        <NumericButton item text='9' action={() => {this.addDigit('9')}} align='right'></NumericButton>
                        <NumericButton item text='4' action={() => {this.addDigit('4')}} align='left'></NumericButton>
                        <NumericButton item text='5' action={() => {this.addDigit('5')}} align='center'></NumericButton>
                        <NumericButton item text='6' action={() => {this.addDigit('6')}} align='right'></NumericButton>
                        <NumericButton item text='1' action={() => {this.addDigit('1')}} align='left'></NumericButton>
                        <NumericButton item text='2' action={() => {this.addDigit('2')}} align='center'></NumericButton>
                        <NumericButton item text='3' action={() => {this.addDigit('3')}} align='right'></NumericButton>
                        <NumericButton item text='0' action={() => {this.addDigit('0')}} align='center'></NumericButton>
                        <NumericButton item text='Backspace' action={() => {this.removeDigit()}} align='right'></NumericButton>
                    </Grid>
                    <Grid item xs={12} align='right' bottom='2vh'>
                        <ContinueButton text={t('payment.nif.continue')} action={goto('methods')} />
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