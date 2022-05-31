import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton } from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import MethodButton from "../components/MethodButton";
import applepay from '../assets/images/ApplePayPage/applepay.png';
import receipt from '../assets/images/ReceiptPage/receipt.jpg';
import '../assets/styles/ReceiptPage.css';

import kiosk_receipt from '../assets/images/kiosk/kiosk_receipt.png';
import kiosk_receipt_ticket_pass from '../assets/images/kiosk/kiosk_receipt_ticket_pass.png';



class FinishPage extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => { this.props.goto('start')(); }, 5000);
    }

    contents = {
        single: <>
            <Grid item xs={6}>
                <Typography variant='h5'>
                    {this.props.t('finish.description.receiptTicket')}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={kiosk_receipt_ticket_pass} width='100%'/>
            </Grid>
        </>,
        renew: <>
            <Grid item xs={6}>
                <Typography variant='h5'>
                    {this.props.t('finish.description.receiptOnly')}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={kiosk_receipt}  width='100%' />
            </Grid>
        </>
    }

    getContent = () => {
        const { data } = this.props;
        const { prev_page } = data;
        const contents = this.contents;
        return contents[prev_page];
    }

    render() {
        const { t, goto, data } = this.props;
        const { prev_page, price } = data;

        return (
            <Grid container alignItems='center'>
                <Grid item xs={12} height='10vh'>

                </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('finish.prompt.thanks')}</h1>
                    <hr />
                </Grid>
                {this.getContent()}
            </Grid>
        );
    }
}

export default withTranslation('common')(FinishPage);