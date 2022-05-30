import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import { Progress, BackButton, ContinueButton, PassInfo } from "../../components";
import kiosk from '../../assets/images/kiosk/kiosk_sensor.png';

class RenewPage extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => { this.setIndex(1); }, 5000); // Pretend to scan the pass
    }

    state = {
        index: 0
    };

    smallSteps = [
        [
            <Typography fontWeight='bold' color='success.main'>{this.props.t('progress.smallStep.passes.renew.scan')}</Typography>,
            <Typography> {this.props.t('progress.smallStep.passes.renew.details')}</Typography>
        ],
        [
            <Typography fontWeight='bold'>{this.props.t('progress.smallStep.passes.renew.scan')}</Typography>,
            <Typography fontWeight='bold' color='success.main'> {this.props.t('progress.smallStep.passes.renew.details')}</Typography>
        ]
    ];

    prompts = [
        <h1>{this.props.t('renew.prompt.scan')}</h1>,
        <h1>{this.props.t('renew.prompt.details')}</h1>
    ];

    passes = [{
        pass_name: this.props.t('passInfo.passName.monthlyStudent'),
        price: '40,00€',
        location_names: ['Vagos', 'Aveiro (Universidade)'],
        buses: ['5000']
    }];

    contents = [
        <>
            <Grid item xs={6}>
                <Typography variant='h5'>
                    {this.props.t('renew.description.scan')}
                </Typography>
            </Grid>
            <Grid item xs={6} marginLeft='-10vh'>
                <img src={kiosk} height='500vh' />
            </Grid>
        </>,
        <>
            <Grid item xs={12} className='info' >
                <PassInfo info={this.passes[0]} />
            </Grid>
        </>
    ];

    footers = [
        <>
            <Grid item xs={12} align='left'>
                <BackButton text={this.props.t('button.back')} back={this.props.goto('passes')} />
            </Grid>
        </>,
        <>
            <Grid item xs={6} align='left'>
                <BackButton text={this.props.t('button.back')} back={() => { this.setIndex(0); }} />
            </Grid>
            <Grid item xs={6} align='right'>
                <ContinueButton text={this.props.t('button.continue')} action={this.props.goto('nif')} />
            </Grid>
        </>
    ];

    setIndex = (index) => {
        if (index == 0) setTimeout(() => { this.setIndex(1); }, 5000); // Pretend to scan the pass
        this.setState({
            index: index
        });
    }

    getSmallSteps = () => {
        const { index } = this.state;
        const smallSteps = this.smallSteps;
        return smallSteps[index];
    }

    getPrompt = () => {
        const { index } = this.state;
        const prompts = this.prompts;
        return prompts[index];
    }

    getContent = () => {
        const { index } = this.state;
        const contents = this.contents;
        return contents[index];
    }

    getFooter = () => {
        const { index } = this.state;
        const footers = this.footers;
        return footers[index];
    }

    render() {
        const { t, goto } = this.props;

        return (
            <>
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={[
                                [<Typography fontWeight='bold'>{t('progress.bigStep.passes.renew')}</Typography>, goto('operation')]
                            ]}
                            smallSteps={this.getSmallSteps()}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        {this.getPrompt()}
                        <hr />
                    </Grid>
                    {this.getContent()}
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    {this.getFooter()}
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(RenewPage);