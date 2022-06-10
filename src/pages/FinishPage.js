import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { InfoOutlined } from '@mui/icons-material';
import { withTranslation } from "react-i18next";
import imgKioskReceipt from '../assets/images/Kiosk/receipt.png';
import imgKioskReceiptTicketPass from '../assets/images/Kiosk/receipt_ticket_pass.png';

class FinishPage extends Component {

    constructor(props) {
        super(props);
        this.setTimeout();
    }

    contents = {
        single: <>
            <Grid item xs={12} align='center'>
                <Typography variant='h3'>
                    <InfoOutlined style={{
                        color: '#ed6c02',
                        fontSize: '4vh',
                        marginRight: '1vh',
                        verticalAlign: 'middle',
                    }} />
                    {this.props.t('finish.description.receiptTicket')}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <img src={imgKioskReceiptTicketPass} alt='kioskReceiptTicketPass' width='75%' />
            </Grid>
        </>,
        renew: <>
            <Grid item xs={12} align='center'>
                <Typography variant='h3'>
                    <InfoOutlined style={{
                        color: '#ed6c02',
                        fontSize: '4vh',
                        marginRight: '1vh',
                        verticalAlign: 'middle',
                    }} />
                    {this.props.t('finish.description.receiptOnly')}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <img src={imgKioskReceipt} alt='kioskReceipt' width='75%' />
            </Grid>
        </>
    }

    setTimeout = () => {
        const { goto } = this.props;

        setTimeout(() => {
            goto('start');
        }, 5000);
    }

    getContent = () => {
        const { data } = this.props;
        const { prev_page } = data;
        const contents = this.contents;
        return contents[prev_page];
    }

    render = () => {
        const { t } = this.props;

        return (
            <Grid container alignItems='center'>
                <Grid item xs={12} height='10vh'>

                </Grid>
                <Grid item xs={12} align='center'>
                    <Typography variant='h1' fontWeight='bold'>{t('finish.prompt.thanks')}</Typography>
                    <hr />
                </Grid>
                {this.getContent()}
            </Grid>
        );
    }
}

export default withTranslation('common')(FinishPage);