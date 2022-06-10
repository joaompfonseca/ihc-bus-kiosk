import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import { BackButton, ContinueButton, LoseInfoModal, PassInfo, Progress } from "../components";
import imgKioskSensor from '../assets/images/Kiosk/sensor.png';

class RenewPage extends Component {

    constructor(props) {
        super(props);
        this.setTimeout(); // Pretend to scan the pass
    }

    state = (this.props.data?.renew_state === undefined) ?
        {
            index: 0,
            lose_info_action: () => { },
            lose_info_modal: false
        }
        : this.props.data.renew_state;

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
        <Typography variant='h1' fontWeight='bold'>{this.props.t('renew.prompt.scan')}</Typography>,
        <Typography variant='h1' fontWeight='bold'>{this.props.t('renew.prompt.details')}</Typography>
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
                <Typography variant='h3'>
                    {this.props.t('renew.description.scan')}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={imgKioskSensor} alt='kioskSensor' width='100%' />
            </Grid>
        </>,
        <>
            <Grid item xs={12}>
                <PassInfo info={this.passes[0]} />
            </Grid>
        </>
    ];

    footers = [
        <>
            <Grid item xs={12} align='left'>
                <BackButton text={this.props.t('button.back')} action={() => { this.clearTimeout(); this.props.goto('passes'); }} />
            </Grid>
        </>,
        <>
            <Grid item xs={6} align='left'>
                <BackButton text={this.props.t('button.back')} action={() => {
                    this.setLoseInfoAction(() => { this.setIndex(0); });
                    this.setLoseInfoModal(true);
                }} />
            </Grid>
            <Grid item xs={6} align='right'>
                <ContinueButton text={this.props.t('button.continue')} action={() => {
                    this.props.goto('nif', {
                        prev_page: 'renew',
                        price: this.passes[0].price,
                        renew_state: this.state
                    });
                }} />
            </Grid>
        </>
    ];

    setLoseInfoAction = (action) => {
        this.setState({
            lose_info_action: action
        })
    }

    setLoseInfoModal = (bool) => {
        this.setState({
            lose_info_modal: bool
        })
    }

    setTimeout = () => {
        const { index } = this.state;

        if (index === 0) {
            setTimeout(() => {
                this.setIndex(1);
            }, 7000);
        }
    }

    clearTimeout = () => {
        const highestTimeoutId = setTimeout(() => { });
        for (var i = 0; i < highestTimeoutId; i++) {
            clearTimeout(i);
        }
    }

    setIndex = (index) => {
        if (index === 0) setTimeout(() => { this.setIndex(1); }, 5000); // Pretend to scan the pass
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
        const { index, lose_info_action, lose_info_modal } = this.state;

        return (
            <>
                <LoseInfoModal
                    action={() => {
                        lose_info_action();
                        if (index === 1) {
                            this.setLoseInfoModal(false);
                        }
                    }}
                    close={() => {
                        this.setLoseInfoModal(false);
                        if (index === 0) {
                            this.setTimeout();
                        }
                    }}
                    open={lose_info_modal}
                />
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={[
                                [<Typography fontWeight='bold'>{t('progress.bigStep.passes.renew')}</Typography>, () => {
                                    this.clearTimeout();
                                    if (index === 0) {
                                        goto('operation');
                                    }
                                    else if (index === 1) {
                                        this.setLoseInfoAction(() => { goto('operation'); });
                                        this.setLoseInfoModal(true);
                                    }
                                }]
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