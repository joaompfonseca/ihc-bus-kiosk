import { Grid, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress, BackButton, ContinueButton } from "../components";
import NumericButton from "../components/NumericButton";
//import TextField from "../components/TextField";


export default function NifPage(props) {
    const { t } = useTranslation('common');
    return (
            <Grid container>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.nif')}</Typography>,
                            <Typography>{t('progress.smallStep.payment')}</Typography>
                        ]}
                    />
			    </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('payment.prompt')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={12} align='center'>
                    <TextField></TextField>
                </Grid>
                <Grid item xs={12} align='center'>
                    <NumericButton item text='7' align='left'></NumericButton>
                    <NumericButton item text='8' align='center'></NumericButton>
                    <NumericButton item text='9' align='right'></NumericButton>
                    <NumericButton item text='4' align='left'></NumericButton>
                    <NumericButton item text='5' align='center'></NumericButton>
                    <NumericButton item text='6' align='right'></NumericButton>
                    <NumericButton item text='1' align='left'></NumericButton>
                    <NumericButton item text='2' align='center'></NumericButton>
                    <NumericButton item text='3' align='right'></NumericButton>
                    <NumericButton item text='0' align='center'></NumericButton>
                    <NumericButton item text='Backspace' align='right'></NumericButton>
                </Grid>
                <Grid item xs={12} align ='right' bottom='2vh'>
                    <ContinueButton text={t('payment.continue')} back={props.goto('nif')} />
                </Grid>
            </Grid>

    );

}