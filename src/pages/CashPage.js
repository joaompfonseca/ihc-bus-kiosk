import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import TextBox from "../components/TextField";
import cash from '../assets/images/PaymentMethodPage/cash.png';
import '../assets/styles/CashPage.css';

class CashPage extends Component {
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
                total: '',
                inserted: '',
                change: ''
            });
            return;
        }

        const {total, inserted, change} = this.state;

        return (
            <>
            <Grid container>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography>{t('...')}</Typography>,
                            <Typography>{t('progress.smallStep.payment')}</Typography>,
                            <Typography fontWeight='bold' color='success.dark'>{t('payment.method.cash')}</Typography>
                        ]}
                    />
			    </Grid>
                <Grid item className='cash' align='center' xs={12}>
                    <img src={cash} alt='cash'/>
                </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('payment.cash.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={4} align='center'>
                    <h2>Total:</h2>
                </Grid>
                <Grid item xs={8}>
                    <TextBox></TextBox>
                </Grid>
                <Grid item xs={4} align='center'>
                    <h2>Inserted:</h2>
                </Grid>
                <Grid item xs={8}>
                    <TextBox></TextBox>
                </Grid>
                <Grid item xs={4} align='center'>
                    <h2>Change:</h2>
                </Grid>
                <Grid item xs={8}>
                    <TextBox></TextBox>
                </Grid>
                <Grid item xs={12} align ='right' bottom='2vh'>
                    <ContinueButton text={t('payment.nif.continue')} next={goto('receipt')} />
                </Grid>
            </Grid>
            </>
        );
    }
}

export default withTranslation('common')(CashPage);