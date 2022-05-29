import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import TextBox from "../components/TextField";


class NifPage extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    setNif = (text) => e => {
        this.setState({ nif: text });
    }
    

    render() {
        const { t, goto } = this.props;

        if (this.state == null) {
            // Do it here so we can use translations
            this.state = {}
            this.setState({
                nif: '',
            });
            return;
        }

        const {nif} = this.state;

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
                    <TextBox></TextBox>
                </Grid>
                <Grid item xs={12} align='center'>
                    <NumericButton item text='7' onClick={this.setNif('7')} align='left'></NumericButton>
                    <NumericButton item text='8' action={this.setNif('8')} align='center'></NumericButton>
                    <NumericButton item text='9' action={this.setNif('9')} align='right'></NumericButton>
                    <NumericButton item text='4' action={this.setNif('4')} align='left'></NumericButton>
                    <NumericButton item text='5' action={this.setNif('9')} align='center'></NumericButton>
                    <NumericButton item text='6' action={this.setNif('9')} align='right'></NumericButton>
                    <NumericButton item text='1' action={this.setNif('9')} align='left'></NumericButton>
                    <NumericButton item text='2' action={this.setNif('9')} align='center'></NumericButton>
                    <NumericButton item text='3' action={this.setNif('9')} align='right'></NumericButton>
                    <NumericButton item text='0' action={this.setNif('9')} align='center'></NumericButton>
                    <NumericButton item text='Backspace' action={this.setNif('')} align='right'></NumericButton>
                </Grid>
                <Grid item xs={12} align ='right' bottom='2vh'>
                    <ContinueButton text={t('payment.nif.continue')} next={goto('methods')} />
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