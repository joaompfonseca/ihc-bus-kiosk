import { Grid, Typography, Pagination } from "@mui/material";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import { Progress, BackButton, ContinueButton, BasicDatePicker, AddButton, EditButton, RouteInfo, LocationsModal } from "../../components";
import transdev from '../../assets/images/logos/transdev.jpg';

class SinglePage extends Component {

    state = {
        origin_locations_modal: false,
        origin_selected: false,
        origin_name: this.props.t('single.label.origin'),
        destination_locations_modal: false,
        destination_selected: false,
        destination_name: this.props.t('single.label.destination'),
        routes_page: 1
    };

    smallSteps = [
        [
            <Typography fontWeight='bold' color='success.main'>{this.props.t('progress.smallStep.createRoute')}</Typography>,
            <Typography> {this.props.t('progress.smallStep.selectRoute')}</Typography>
        ],
        [
            <Typography fontWeight='bold'>{this.props.t('progress.smallStep.createRoute')}</Typography>,
            <Typography fontWeight='bold' color='success.main'> {this.props.t('progress.smallStep.selectRoute')}</Typography>
        ]
    ];

    origin_names = [
        'Ted Sit Amet',
        'Terminal Rodoviário de Aveiro',
        'Tullam Mattis'
    ];

    destination_names = [
        'Commodo Metus',
        'Costa Nova',
        'Cusces Eget'
    ];

    routes = [
        {
            logo: transdev,
            price: '4,00€',
            origin_time: '10:05',
            destination_time: '10:25',
            buses: ['5002']
        },
        {
            logo: transdev,
            price: '2,00€',
            origin_time: '10:10',
            destination_time: '10:40',
            buses: ['5005', '5007']
        },
        {
            logo: transdev,
            price: '3,00€',
            origin_time: '10:35',
            destination_time: '10:55',
            buses: ['5010']
        },
    ];

    setOriginLocationsModal = (bool) => {
        this.setState({
            origin_locations_modal: bool
        })
    }

    setDestinationLocationsModal = (bool) => {
        this.setState({
            destination_locations_modal: bool
        })
    }

    setOriginSelected = (bool) => {
        this.setState({
            origin_selected: bool
        });
    }

    setOriginName = (name) => {
        this.setState({
            origin_name: name
        });
    }

    setDestinationSelected = (bool) => {
        this.setState({
            destination_selected: bool
        });
    }

    setDestinationName = (name) => {
        this.setState({
            destination_name: name
        });
    }

    setRoutesPage = (page) => {
        this.setState({
            routes_page: page
        });
    }

    getSmallSteps = () => {
        const { origin_selected, destination_selected } = this.state;
        const smallSteps = this.smallSteps;

        if (!origin_selected || !destination_selected)
            return smallSteps[0];
        else
            return smallSteps[1];
    }

    getOriginButton = () => {
        const { t } = this.props;
        const { origin_selected } = this.state;
        if (origin_selected)
            return <EditButton action={() => { this.setOriginLocationsModal(true); this.setOriginSelected(false); this.setOriginName(t('single.label.origin')); }} />;
        else
            return <AddButton action={() => { this.setOriginLocationsModal(true); }} />;
    }

    getDestinationButton = () => {
        const { t } = this.props;
        const { destination_selected } = this.state;
        if (destination_selected)
            return <EditButton action={() => { this.setDestinationLocationsModal(true); this.setDestinationSelected(false); this.setDestinationName(t('single.label.destination')); }} />
        else
            return <AddButton action={() => { this.setDestinationLocationsModal(true); }} />
    }

    getRoutesPrompt = () => {
        const { t } = this.props;
        const { origin_selected, destination_selected } = this.state;

        if (!origin_selected || !destination_selected)
            return;

        return <>
            <h1>{t('single.prompt.select')}</h1>
            <hr />
        </>;
    }

    getRoutes = () => {
        const { goto } = this.props;
        const { origin_selected, origin_name, destination_selected, destination_name, routes_page } = this.state;
        const routes = this.routes;

        if (!origin_selected || !destination_selected)
            return;

        switch (routes_page) {
            case 1: return [
                <RouteInfo
                    details={{
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[0]
                    }}
                    action={goto('nif', {
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[0]
                    })}
                />,
                <RouteInfo
                    details={{
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[1]
                    }}
                    action={goto('nif', {
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[1]
                    })}
                />
            ];
            case 2: return [
                <RouteInfo
                    details={{
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[2]
                    }}
                    action={goto('nif', {
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[2]
                    })}
                />
            ];
        }
    }

    getRoutesPagination = () => {
        const { origin_selected, destination_selected } = this.state;

        if (!origin_selected || !destination_selected)
            return;

        return <Pagination count={2} onChange={this.routesPageChange} />;
    }

    routesPageChange = (event, page) => {
        this.setRoutesPage(page);
    }

    render() {
        const { t, goto } = this.props;
        const { origin_locations_modal, destination_locations_modal, origin_name, destination_name } = this.state;
        const origin_names = this.origin_names;
        const destination_names = this.destination_names;

        return (
            <>
                <LocationsModal
                    action={(name) => {this.setOriginName(name); this.setOriginSelected(true); this.setOriginLocationsModal(false); }}
                    location_names={origin_names}
                    close={() => { this.setOriginLocationsModal(false); }}
                    open={origin_locations_modal}
                />
                <LocationsModal
                    action={(name) => {this.setDestinationName(name); this.setDestinationSelected(true); this.setDestinationLocationsModal(false); }}
                    location_names={destination_names}
                    close={() => { this.setDestinationLocationsModal(false); }}
                    open={destination_locations_modal}
                />
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={[
                                [<Typography fontWeight='bold'>{t('progress.bigStep.tickets.single')}</Typography>, goto('operation')]
                            ]}
                            smallSteps={this.getSmallSteps()}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <h1>{t('single.prompt.create')}</h1>
                        <hr />
                    </Grid>
                    <Grid item xs={2} align='left'>
                        {this.getOriginButton()}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className='origin' variant='p'>
                            {origin_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2} align='left'>
                        {this.getDestinationButton()}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className='destination' variant='p'>
                            {destination_name}
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
                        {this.getRoutesPrompt()}
                    </Grid>
                    <Grid item xs={12} className='info' height='30vh'>
                        {this.getRoutes()}
                    </Grid>
                    <Grid item xs={12}
                        display='flex'
                        justifyContent='center'>
                        {this.getRoutesPagination()}
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={12} align='left'>
                        <BackButton text={t('button.back')} back={goto('tickets')} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(SinglePage);