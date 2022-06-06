import { Grid, Typography } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import { LargeButton, Progress, BackButton, ContinueButton } from "../components";

class ConfirmSinglePage extends Component {

    render() {
        const { t, goto, data } = this.props;
        const {
            logo, price,
            origin_name, origin_time,
            destination_name, destination_time,
            buses } = data;

        return (
            <>
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={[
                                [<Typography fontWeight='bold'>{t('progress.bigStep.tickets.single')}</Typography>, goto('operation')]
                            ]}
                            smallSteps={[
                                <Typography fontWeight='bold'>{t('progress.smallStep.ticket')}</Typography>,
                                <Typography fontWeight='bold' color='success.main'> {t('progress.smallStep.confirm')}</Typography>
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <h1>{t('confirmSingle.prompt.details')}</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={12} className='route-info'>
                        <Grid container alignItems='top'
                            style={{
                                paddingInline: '0.5vh',
                                borderRadius: '0.5vh',
                                borderWidth: '0.3vh',
                                borderColor: 'cornflowerblue',
                                borderStyle: 'solid',
                                marginBottom: '1vh'
                            }}>
                            {/* Row 1 */}
                            <Grid item xs={4}>
                                <img src={logo} height='50vh' />
                            </Grid>
                            <Grid item xs={5}>

                            </Grid>
                            <Grid item xs={3} align='center'>
                                <Typography variant='h1' fontWeight='bold' paddingTop='1vh'>
                                    {price}
                                </Typography>
                            </Grid>
                            {/* Row 2 */}
                            <Grid item xs={4}>
                                <Typography variant='h3' fontWeight='bold'>
                                    {origin_time}
                                </Typography>
                                <Typography variant='h4'>
                                    {origin_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={1} align='center'>
                                <KeyboardArrowRight />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant='h3' fontWeight='bold' align='right'>
                                    {destination_time}
                                </Typography>
                                <Typography variant='h4' align='right'>
                                    {destination_name}
                                </Typography>
                            </Grid>
                            <Grid item xs={3} align='center'>
                                <ContinueButton />
                            </Grid>
                            {/* Row 3 */}
                            <Grid item xs={4}>
                                <Typography variant='h4' color='text.secondary'>
                                    {t('routeInfo.buses') + ' (' + buses.length + '): ' + buses}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={6} align='left'>
                        <BackButton text={t('button.back')} back={goto('single')} />
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <ContinueButton text={t('button.payment')} action={goto('nif')} />
                    </Grid>
                </Grid>
            </>
        );
    }
}
export default withTranslation('common')(ConfirmSinglePage);