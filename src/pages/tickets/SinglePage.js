import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import { Progress, BackButton, ContinueButton, BasicDatePicker, AddButton, EditButton } from "../../components";

class SinglePage extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }

    setOrigin = (text) => {
        this.setState({ 
            origin: text
        });
    }

    setDestination = (text) => {
        this.setState({ 
            destination: text
        });
    }

    setOriginButton = (origin, t) => {
        if (origin === t('single.label.origin'))
            return <AddButton action={() => {this.setOrigin('Terminal Rodoviário de Aveiro')}} />
        else
            return <EditButton action={() => {this.setOrigin('Outra coisa')}} />
    }

    setDestinationButton = (destination, t) => {
        if (destination === t('single.label.destination'))
            return <AddButton action={() => {this.setDestination('Costa Nova')}} />
        else
            return <EditButton action={() => {this.setDestination('Mais outra coisa')}} />
    }

    render() {
        const { t, goto } = this.props;

        if (this.state == null) {
            // Do it here so we can use translations
            this.state = {}
            this.setState({
                origin: t('single.label.origin'),
                destination: t('single.label.destination')
            });
            return;
        }

        const { origin, destination } = this.state;

        return (
            <>
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={[
                                [<Typography fontWeight='bold'>{t('progress.bigStep.tickets.single')}</Typography>, goto('operation')]
                            ]}
                            smallSteps={[
                                <Typography fontWeight='bold' color='success.main'>{t('progress.smallStep.ticket')}</Typography>,
                                <Typography>{t('progress.smallStep.confirm')}</Typography>
                            ]}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <h1>{t('single.prompt.create')}</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={2} align='left'>
                        {this.setOriginButton(origin, t)}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className='origin' variant='p'>
                            {origin}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} align='left'>
                        {this.setDestinationButton(destination, t)}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className='destination' variant='p'>
                            {destination}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='p'>
                            {t('single.label.date')}
                        </Typography>
                    </Grid>
                    <Grid item xs={8} className='date-picker'>
                        <BasicDatePicker />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <h1>{t('single.prompt.select')}</h1>
                        <hr />
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={6} align='left'>
                        <BackButton text={t('button.back')} back={goto('tickets')} />
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <ContinueButton text={t('button.continue')} back={goto('confirm')} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(SinglePage);