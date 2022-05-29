import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import MethodButton from "../components/MethodButton";
import applepay from '../assets/images/ApplePayPage/applepay.png';
import receipt from '../assets/images/ReceiptPage/receipt.jpg';
import '../assets/styles/ReceiptPage.css';



export default function ReceiptPage(props) {

    const { t } = useTranslation('common');
    

    return (
        <Grid container onClick={props.goto('start')}>
            <Grid item xs={12} align='center'>
                <h1>{t('receipt.prompt')}</h1>
            </Grid>
            <Grid item className='receipt' align='center' paddingTop={'10vh'} xs={12}>
                <img src={receipt} alt='receipt'/>
            </Grid>
            <Grid item xs={12} align='center'>
                <h1>{t('receipt.thanks')}</h1>
            </Grid>
        </Grid>
    );
}