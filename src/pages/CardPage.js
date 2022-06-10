import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";
import { BackButton, LoseInfoModal, Progress } from "../components";
import imgKioskCard from '../assets/images/Kiosk/card.png';

class CardPage extends Component {

    constructor(props) {
        super(props);
        this.setTimeout(); // Pretend to pay
    }

    state = {
        lose_info_action: () => { },
        lose_info_modal: false
    }

    bigSteps = {
        single: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.tickets.single')}</Typography>, () => { this.clearTimeout(); this.setLoseInfoAction(() => { this.props.goto('operation'); }); this.setLoseInfoModal(true); }],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.single')}</Typography>, () => { this.clearTimeout(); this.props.goto('single', this.props.data); }]
        ],
        renew: [
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.passes.renew')}</Typography>, () => { this.clearTimeout(); this.setLoseInfoAction(() => { this.props.goto('operation'); }); this.setLoseInfoModal(true); }],
            [<Typography fontWeight='bold'>{this.props.t('progress.bigStep.customization.renew')}</Typography>, () => { this.clearTimeout(); this.props.goto('renew', this.props.data); }]
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

    setTimeout = () => {
        const { data, goto } = this.props;
        const { prev_page, price } = data;

        setTimeout(() => {
            goto('finish', {
                prev_page: prev_page,
                price: price
            });
        }, 7000);
    }

    clearTimeout = () => {
        const highestTimeoutId = setTimeout(() => { });
        for (var i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
    }

    getBigSteps = () => {
        const { data } = this.props;
        const { prev_page } = data;
        const bigSteps = this.bigSteps;
        return bigSteps[prev_page];
    }

    render() {
        const { t, goto, data } = this.props;
        const { lose_info_action, lose_info_modal } = this.state;

        return (
            <>
                <LoseInfoModal
                    action={() => { lose_info_action() }}
                    close={() => { this.setLoseInfoModal(false); this.setTimeout(); }}
                    open={lose_info_modal}
                />
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={this.getBigSteps()}
                            smallSteps={[
                                <Typography fontWeight='bold'>{t('progress.smallStep.nif')}</Typography>,
                                <Typography fontWeight='bold'>{t('progress.smallStep.paymentMethod')}</Typography>,
                                <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.transaction')}</Typography>,
                                <Typography>{t('progress.smallStep.finish')}</Typography>
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('card.prompt.pay')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h3'>{t('card.description.insert')}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={imgKioskCard} alt='kioskCard' width='100%' />
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={12} align='left'>
                        <BackButton text={t('button.back')} action={() => {
                            this.clearTimeout();
                            goto('paymentMethods', data);
                        }} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(CardPage);