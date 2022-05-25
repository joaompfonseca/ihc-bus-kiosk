import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress, BackButton } from "../components";
import '../assets/styles/OperationPage.css';

export default function OperationPage(props) {
    const { t } = useTranslation('common');

    return (
        <Grid container>
            <Grid item xs={12}>
                <Progress
                    bigSteps={[]}
                    smallSteps={[
                        <Typography fontWeight='bold' color='success.dark'>{t('progress.smallStep.operation')}</Typography>,
                        <Typography>{t('progress.smallStep.type')}</Typography>
                    ]}
                />
            </Grid>
            <Grid item xs={12} align='center'>
                <h1>{t('operation.promptBasic')}</h1>
                <hr />
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('operation.button.tickets')} next={props.goto('tickets')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('operation.description.tickets')}
                </Typography>
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('operation.button.passes')} next={props.goto('passes')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('operation.description.passes')}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <h1>{t('operation.promptHelp')}</h1>
                <hr />
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('operation.button.helpRechargeablePass')} next={props.goto('helpRechargeablePass')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('operation.description.helpRechargeablePass')}
                </Typography>
            </Grid>
            <Grid item xs={12} position='fixed' bottom='2vh'>
                <BackButton text={t('back')} back={props.goto('start')} />
            </Grid>
        </Grid>
    );
}