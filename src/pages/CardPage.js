import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Component } from "react";
import { LargeActionButton, Progress, BackButton, ContinueButton} from "../components";
import { withTranslation } from "react-i18next";
import NumericButton from "../components/NumericButton";
import MethodButton from "../components/MethodButton";
import card from '../assets/images/PaymentMethodPage/card.png';



export default function CardPage(props) {

    const { t } = useTranslation('common');
    

    return (
        <Grid container>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography>{t('...')}</Typography>,
                            <Typography>{t('progress.smallStep.payment')}</Typography>,
                            <Typography fontWeight='bold' color='success.dark'>{t('payment.method.card')}</Typography>
                        ]}
                    />
			    </Grid>
                <Grid item align='center' xs={12}>
                    <img src={card} alt='card'/>
                </Grid>

                <Grid item xs={12} align='center'>
                    <h1>{t('payment.card.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={12} align='right'>
                    <ContinueButton text="Continue" action={props.goto('receipt')} />
                </Grid>
            </Grid>
    );
}