import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";
import { LargeButton, Progress, BackButton } from "../components";

class OperationPage extends Component {

    render = () => {
        const { goto, t } = this.props;

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
                        <Typography variant='h1' fontWeight='bold'>{t('operation.prompt.operation')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('operation.button.tickets')} action={() => { goto('tickets'); }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('operation.description.tickets')}</Typography>
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('operation.button.passes')} action={() => { goto('passes'); }} />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('operation.description.passes')}</Typography>
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('operation.prompt.assistance')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={4} align='left'>
                        <LargeButton text={t('operation.button.assistanceRechargeableOrPass')} action={() => { goto('assistanceRechargeableOrPass'); }} disabled />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>{t('operation.description.assistanceRechargeableOrPass')}</Typography>
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={12} align='left'>
                        <BackButton text={t('button.back')} action={() => { goto('start'); }} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(OperationPage);