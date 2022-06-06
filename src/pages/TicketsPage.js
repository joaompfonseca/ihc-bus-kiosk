import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";
import { BackButton, LargeButton, Progress } from "../components";

class TicketsPage extends Component {

    render = () => {
        const { goto, t } = this.props;

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
                        <Typography variant='h1' fontWeight='bold'>{t('tickets.prompt.buy')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('tickets.button.single')} action={() => { goto('single'); }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('tickets.description.single')}</Typography>
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('tickets.button.rechargeable')} action={() => { goto('rechargeable'); }} disabled />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('tickets.description.rechargeable')}</Typography>
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('tickets.button.fullDay')} action={() => { goto('fullDay'); }} disabled />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('tickets.description.fullDay')}</Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('tickets.prompt.recharge')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('tickets.button.recharge')} action={() => { goto('recharge'); }} disabled />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('tickets.description.recharge')}</Typography>
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={12} align='left'>
                        <BackButton text={t('button.back')} action={() => { goto('operation'); }} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(TicketsPage);