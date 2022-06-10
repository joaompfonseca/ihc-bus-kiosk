import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";
import { BackButton, LoseInfoModal, MethodButton, Progress } from "../components";
import cash from '../assets/images/PaymentMethod/cash.png';
import card from '../assets/images/PaymentMethod/card.png';
import mbway from '../assets/images/PaymentMethod/mbway.png';
import applepay from '../assets/images/PaymentMethod/applepay.png';
import paypal from '../assets/images/PaymentMethod/paypal.png';
import bitcoin from '../assets/images/PaymentMethod/bitcoin.png';

class PaymentMethodsPage extends Component {

    state = {
        lose_info_action: () => { },
        lose_info_modal: false
    }

    bigSteps = {
        single: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.tickets.single')}</Typography>, () => { this.setLoseInfoAction(() => { this.props.goto('operation', this.props.data); }); this.setLoseInfoModal(true); }],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.single')}</Typography>, () => { this.props.goto('single', this.props.data); }]
        ],
        renew: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.passes.renew')}</Typography>, () => { this.setLoseInfoAction(() => { this.props.goto('operation', this.props.data); }); this.setLoseInfoModal(true); }],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.renew')}</Typography>, () => { this.props.goto('renew', this.props.data); }]
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

    getBigSteps = () => {
        const { data } = this.props;
        const { prev_page } = data;
        const bigSteps = this.bigSteps;
        return bigSteps[prev_page];
    }

    render() {
        const { t, goto, data } = this.props;
        const { price } = data;
        const { lose_info_action, lose_info_modal } = this.state;

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
                                <Typography fontWeight='bold'>{t('progress.smallStep.nif')}</Typography>,
                                <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.paymentMethod')}</Typography>,
                                <Typography>{t('progress.smallStep.transaction')}</Typography>,
                                <Typography>{t('progress.smallStep.finish')}</Typography>
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('paymentMethods.prompt.select')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={6} align='right' paddingRight='2vh'>
                        <MethodButton text={t('paymentMethods.button.cash')} image={cash} action={() => { goto('cash', data); }} disabled />
                    </Grid>
                    <Grid item xs={6} align='left' paddingLeft='2vh'>
                        <MethodButton text={t('paymentMethods.button.card')} image={card} action={() => { goto('card', data); }} />
                    </Grid>
                    <Grid item xs={6} align='right' paddingRight='2vh'>
                        <MethodButton /* text={t('paymentMethods.button.mbway')} */ image={mbway} action={() => { goto('mbway', data); }} disabled />
                    </Grid>
                    <Grid item xs={6} align='left' paddingLeft='2vh'>
                        <MethodButton text={t('paymentMethods.button.applepay')} image={applepay} action={() => { goto('applepay', data); }} disabled />
                    </Grid>
                    <Grid item xs={6} align='right' paddingRight='2vh'>
                        <MethodButton /* text={t('paymentMethods.button.paypal')} */ image={paypal} action={() => { goto('paypal', data); }} disabled />
                    </Grid>
                    <Grid item xs={6} align='left' paddingLeft='2vh'>
                        <MethodButton text={t('paymentMethods.button.bitcoin')} image={bitcoin} action={() => { goto('bitcoin', data); }} disabled />
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh' alignItems='center'>
                    <Grid item xs={4} align='left'>
                        <BackButton text={t('button.back')} action={() => { goto('nif', data); }} />
                    </Grid>
                    <Grid item xs={4} align='right'>
                        <Typography variant='h2' fontWeight='bold'>{t('paymentMethods.label.total') + ':'}</Typography>
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <Typography variant='h2'>{price}</Typography>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(PaymentMethodsPage);