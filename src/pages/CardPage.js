import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton } from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import MethodButton from "../components/MethodButton";
import card from '../assets/images/PaymentMethodsPage/card.png';
import kiosk from '../assets/images/kiosk/kiosk_card.png';


class CardPage extends Component {

    constructor(props) {
        super(props);
        const { data } = props;
        const { prev_page, price } = data;
        setTimeout(() => {
            this.props.goto('finish', {
                prev_page: prev_page,
                price: price
            })();
        }, 7000); // Pretend to pay
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

    getBigSteps = () => {
        const { data } = this.props;
        const { prev_page } = data;
        const bigSteps = this.bigSteps;
        return bigSteps[prev_page];
    }

    render() {
        const { t, goto, data } = this.props;
        const { prev_page, price } = data;

        return (
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
                    <h1>{t('card.prompt.pay')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h5'>
                        {this.props.t('card.description.insert')}
                    </Typography>
                </Grid>
                <Grid item xs={6} marginLeft='-10vh'>
                    <img src={kiosk} height='500vh' />
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={12} align='left'>
                        <BackButton text={t('button.back')} back={goto('paymentMethods', {
                            prev_page: prev_page,
                            price: price
                        })} />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withTranslation('common')(CardPage);