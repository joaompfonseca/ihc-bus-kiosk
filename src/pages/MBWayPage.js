import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import TextBox from "../components/TextField";
import MethodButton from "../components/MethodButton";
import qr from '../assets/images/MBWayPage/qrcode.png';
import mbway from '../assets/images/MBWayPage/mbway.png';
import '../assets/styles/MBWayPage.css';



export default function MBWayPage(props) {

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
                <Grid item className='mbway' align='center' xs={12}>
                    <img src={mbway} alt='mway'/>
                </Grid>

                <Grid item className='qrcode' align='center' xs={12}>
                    <img src={qr} alt='qr'/>
                </Grid>

                <Grid item xs={12} align='center'>
                    <h1>{t('payment.mbway.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={12} align='right'>
                    <ContinueButton text="Continue" action={props.goto('receipt')} />
                </Grid>
            </Grid>
    );
}