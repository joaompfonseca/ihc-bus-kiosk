import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton, TextBox} from "../components";
import { withTranslation } from "react-i18next";
import cash from '../assets/images/PaymentMethodPage/cash.png';
import '../assets/styles/CashPage.css';

class CashPage extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }
    
    changeValues = () => {
        if (parseInt(this.state.inserted.replace('€')) < parseInt(this.state.total.replace('€'))) {
            this.setState({
                total: this.state.total,
                inserted: String(parseInt(this.state.inserted.replace('€')) + 3) + '€',
                change: ''
            })

        }
        else {
            this.setState({
                total: this.state.total,
                inserted: this.state.inserted,
                change: String(parseInt(this.state.total.replace('€')) - parseInt(this.state.inserted.replace('€'))) + '€'
            })

        }
    }

    render() {
        const { t, goto , data} = this.props;
        console.log(data);

        if (this.state == null) {
            // Do it here so we can use translations
            this.state = {}
            this.setState({
                total: data,
                inserted: '0€',
                change: ''
            });
            return;
        }

        const {total, inserted, change} = this.state;

        return (
            <>
            <Grid container onClick={this.changeValues}>
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
                    <TextBox text={total}></TextBox>
                </Grid>
                <Grid item xs={4} align='center'>
                    <h2>Inserted:</h2>
                </Grid>
                <Grid item xs={8}>
                    <TextBox text={inserted}></TextBox>
                </Grid>
                <Grid item xs={4} align='center'>
                    <h2>Change:</h2>
                </Grid>
                <Grid item xs={8}>
                    <TextBox text={change}></TextBox>
                </Grid> 
            </Grid>
            </>
        );
    }
}

export default withTranslation('common')(CashPage);