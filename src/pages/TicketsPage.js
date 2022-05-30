import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress, BackButton } from "../components";

export default function TicketsPage(props) {
    const { t } = useTranslation('common');

    return (
        <>
            <Grid container alignItems='center'>
                <Grid item xs={12}>
                    <Progress
                        bigSteps={[]}
                        smallSteps={[
                            <Typography fontWeight='bold'>{t('progress.smallStep.operation')}</Typography>,
                            <Typography fontWeight='bold' color='success.main'>{t('progress.smallStep.type')}</Typography>
                        ]}
                    />
                </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('tickets.prompt.buy')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={4} align='left'>
                    <LargeActionButton text={t('tickets.button.single')} next={props.goto('single')} />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='p'>
                        {t('tickets.description.single')}
                    </Typography>
                </Grid>
                <Grid item xs={4} align='left'>
                    <LargeActionButton text={t('tickets.button.rechargeable')} next={props.goto('rechargeable')} disabled />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='p'>
                        {t('tickets.description.rechargeable')}
                    </Typography>
                </Grid>
                <Grid item xs={4} align='left'>
                    <LargeActionButton text={t('tickets.button.fullDay')} next={props.goto('fullDay')} disabled />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='p'>
                        {t('tickets.description.fullDay')}
                    </Typography>
                </Grid>
                <Grid item xs={12} align='center'>
                    <h1>{t('tickets.prompt.recharge')}</h1>
                    <hr />
                </Grid>
                <Grid item xs={4} align='left'>
                    <LargeActionButton text={t('tickets.button.recharge')} next={props.goto('recharge')} disabled />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant='p'>
                        {t('tickets.description.recharge')}
                    </Typography>
                </Grid>
            </Grid>
            <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                <Grid item xs={12} align='left'>
                    <BackButton text={t('button.back')} back={props.goto('operation')} />
                </Grid>
            </Grid>
        </>
    );
}