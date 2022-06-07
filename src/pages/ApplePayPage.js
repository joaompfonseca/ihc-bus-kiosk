import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeButton, Progress, BackButton, ContinueButton} from "../components";
import applepay from '../assets/images/PaymentMethod/applepay.png';
import nfc from '../assets/images/PaymentMethod/applepay.png';



export default function ApplePayPage(props) {

    const { t } = useTranslation('common');
    

    return (
        <Grid container>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography>{t('...')}</Typography>,
                            <Typography>{t('progress.smallStep.payment')}</Typography>,
                            <Typography fontWeight='bold' color='success.dark'>{t('payment.method.mbway')}</Typography>
                        ]}
                    />
			    </Grid>
                <Grid item className='applepay' align='center' xs={12}>
                    <img src={applepay} alt='applepay'/>
                </Grid>

                <Grid item className='nfc' align='center' xs={12}>
                    <img src={nfc} alt='nfc'/>
                </Grid>

                <Grid item xs={12} align='center'>
                    <h1>{t('payment.applepay.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={12} align='right'>
                    <ContinueButton text="Continue" action={props.goto('receipt')} />
                </Grid>
            </Grid>
    );
}