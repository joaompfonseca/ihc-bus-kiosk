import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import MethodButton from "../components/MethodButton";
import cash from '../assets/images/PaymentMethodPage/cash.png';
import '../assets/styles/PaymentMethodPage.css';



export default function PaymentMethodPage(props) {

    const { t } = useTranslation('common');

    const {goto, data} = props;
    console.log(data) 
    

    return (
        <Grid container>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography>{t('progress.smallStep.nif')}</Typography>,
                            <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.payment')}</Typography>,
                        ]}
                    />
			    </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('payment.method.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={6} align='right' paddingRight='2vh'>
                    <MethodButton text={t('payment.method.cash')} next={goto('cash',data)}>
                        <img src={cash} alt='aquela'></img>
                    </MethodButton>
                </Grid>
                <Grid item xs={6} align='left' paddingLeft='2vh'>
                    <MethodButton text={t('payment.method.card')} next={props.goto('card')}></MethodButton>
                </Grid>
                <Grid item xs={6} align='right' paddingRight='2vh'>
                    <MethodButton text={t('payment.method.mbway')} next={props.goto('mbway')}></MethodButton>
                </Grid>
                <Grid item xs={6} align='left' paddingLeft='2vh'>
                    <MethodButton text={t('payment.method.apple')}  next={props.goto('applepay')}></MethodButton>
                </Grid>
                <Grid item xs={6} align='right' paddingRight='2vh'>
                    <MethodButton text={t('payment.method.paypal')}></MethodButton>
                </Grid>
                <Grid item xs={6} align='left' paddingLeft='2vh'> 
                    <MethodButton text={t('payment.method.bitcoin')}></MethodButton>
                </Grid>
                <Grid item xs={12} position='fixed' bottom='2vh'>
                    <BackButton text={t('button.back')} back={props.goto('start')} />
                </Grid>
            </Grid>
    );
}