import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import TextBox from "../components/TextField";
import MethodButton from "../components/MethodButton";
import applepay from '../assets/images/ApplePayPage/applepay.png';
import nfc from '../assets/images/ApplePayPage/phonenfc.jpg';
import '../assets/styles/ApplePayPage.css';



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
                    <ContinueButton text="Continue" next={props.goto('receipt')} />
                </Grid>
            </Grid>
    );
}