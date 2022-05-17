import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LargeActionButton, Progress } from "../components";
import '../assets/styles/TicketsPage.css';

export default function TicketsPage(props) {
    const { t, i18n } = useTranslation('common');

    return (
        <Grid container>
            <Grid item xs={12}>
                <Progress
                    words={[
                        <Typography fontWeight='bold'>{t('progress.ticket')}</Typography>,
                        <Typography fontWeight='bold' color='success.dark'>{t('progress.action')}</Typography>,
                        <Typography>...</Typography>,
                        <Typography>{t('progress.payment')}</Typography>,
                    ]}
                    back={props.goto('operation')}
                />
            </Grid>
            <Grid item xs={12} align='center'>
                <h1>{t('tickets.promptBuy')}</h1>
                <hr />
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('tickets.button.single')} next={props.goto('tickets')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('tickets.description.single')}
                </Typography>
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('tickets.button.rechargeable')} next={props.goto('tickets')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('tickets.description.rechargeable')}
                </Typography>
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('tickets.button.fullDay')} next={props.goto('tickets')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('tickets.description.fullDay')}
                </Typography>
            </Grid>
            <Grid item xs={12} align='center'>
                <h1>{t('tickets.promptRecharge')}</h1>
                <hr />
            </Grid>
            <Grid item xs={4} align='left'>
                <LargeActionButton text={t('tickets.button.recharge')} next={props.goto('tickets')} />
            </Grid>
            <Grid item xs={8}>
                <Typography variant='p'>
                    {t('tickets.description.recharge')}
                </Typography>
            </Grid>
        </Grid>
    );
}