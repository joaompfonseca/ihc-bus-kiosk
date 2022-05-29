import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress, BackButton } from "../components";

export default function OperationPage(props) {
    const { t } = useTranslation('common');

    return (
        <>
            <Grid container alignItems='center'>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography fontWeight='bold' color='success.main'>{t('progress.smallStep.operation')}</Typography>,
                            <Typography>{t('progress.smallStep.type')}</Typography>
                        ]}
                    />
                </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('operation.prompt.basic')}</h1>
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
                    <h1>{t('operation.prompt.help')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={4} align='left'>
                    <LargeActionButton text={t('operation.button.helpRechargeableOrPass')} next={props.goto('helpRechargeableOrPass')} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='p'>
                        {t('operation.description.helpRechargeableOrPass')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                <Grid item xs={12} align='left'>
                    <BackButton text={t('button.back')} back={props.goto('start')} />
                </Grid>
            </Grid>
        </>
    );
}