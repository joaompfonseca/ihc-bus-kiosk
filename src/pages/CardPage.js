import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { InfoOutlined } from '@mui/icons-material';
import { withTranslation } from "react-i18next";
import { BackButton, LoadingModal, LoseInfoModal, Progress } from "../components";
import imgKioskCard from '../assets/images/Kiosk/card.png';

class CardPage extends Component {

    constructor(props) {
        super(props);
        this.setTimeout(); // Pretend to pay
    }

    state = {
        loading_modal: false,
        loading_modal_text: '',
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

    setLoadingModal = (bool) => {
        this.setState({
            loading_modal: bool
        })
    }

    setLoadingModalText = (text) => {
        this.setState({
            loading_modal_text: text
        })
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
        const { data, goto, t } = this.props;
        const { prev_page, price } = data;

        // Payment
        setTimeout(() => {
            this.setLoadingModalText(t('loading.description.process.payment'));
            this.setLoadingModal(true);
        }, 4000);
        // Ticket
        if (prev_page === 'single') {
            setTimeout(() => {
                this.setLoadingModalText(t('loading.description.print.ticket'));
            }, 6000);
        }
        // Receipt
        setTimeout(() => {
            this.setLoadingModalText(t('loading.description.print.receipt'));
        }, 8000);
        // Finish
        setTimeout(() => {
            this.setLoadingModal(false);
            goto('finish', {
                prev_page: prev_page,
                price: price
            });
        }, 10000);
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
        const { loading_modal, loading_modal_text, lose_info_action, lose_info_modal } = this.state;

        return (
            <>
                <LoadingModal open={loading_modal} text={loading_modal_text} />
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
                    <Grid item xs={12} align='center'>
                        <Typography variant='h3'>
                            <InfoOutlined style={{
                                color: '#ed6c02',
                                fontSize: '4vh',
                                marginRight: '1vh',
                                verticalAlign: 'middle',
                            }} />
                            {t('card.description.insert')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <img src={imgKioskCard} alt='kioskCard' width='75%' />
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