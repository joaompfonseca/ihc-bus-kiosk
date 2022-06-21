import { Component } from "react";
import { FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import { withTranslation } from "react-i18next";
import { AddButton, BackButton, BasicDatePicker, EditButton, LeftButton, LocationsModal, LoseInfoModal, Progress, RightButton, RouteInfo } from "../components";
import imgTransdev from '../assets/images/RouteCompany/transdev.png';

class SinglePage extends Component {

    state = (this.props.data?.single_state === undefined) ?
        {
            departure_date: new Date(),
            destination_locations_modal: false,
            destination_name: this.props.t('single.label.destination'),
            destination_selected: false,
            lose_info_action: () => { },
            lose_info_modal: false,
            origin_locations_modal: false,
            origin_name: 'Terminal Rodoviário de Aveiro',
            origin_selected: true,
            routes_filter: 'time',
            routes_page: 1
        }
        : this.props.data.single_state;

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

    all_routes = [
        {
            logo: imgTransdev,
            price: '3,00€',
            origin_time: '10:05',
            destination_time: '10:30',
            buses: ['5002'],
            total_time: '25min'
        },
        {
            logo: imgTransdev,
            price: '2,00€',
            origin_time: '10:10',
            destination_time: '10:40',
            buses: ['5005', '5007'],
            total_time: '30min'
        },
        {
            logo: imgTransdev,
            price: '4,00€',
            origin_time: '10:35',
            destination_time: '10:55',
            buses: ['5010'],
            total_time: '20min'
        },
    ];

    routes = {
        duration: [this.all_routes[2], this.all_routes[0], this.all_routes[1]],
        price: [this.all_routes[1], this.all_routes[0], this.all_routes[2]],
        time: [this.all_routes[0], this.all_routes[1], this.all_routes[2]]
    };

    setDestinationLocationsModal = (bool) => {
        this.setState({
            destination_locations_modal: bool
        })
    }

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

    setOriginLocationsModal = (bool) => {
        this.setState({
            origin_locations_modal: bool
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

    setDepartureDate = (date) => {
        this.setState({
            departure_date: date
        });
    }

    setRoutesFilter = (event) => {
        this.setState({
            routes_filter: event.target.value
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
            <Typography variant='h1' fontWeight='bold'>{t('single.prompt.select')}</Typography>
            <hr />
        </>;
    }

    getRoutesFilter = () => {
        const { t } = this.props;
        const { origin_selected, destination_selected, routes_filter } = this.state;

        if (!origin_selected || !destination_selected)
            return;

        return <Grid container className='noDivPadding' padding='0vh' alignItems='center'>
            <Grid item xs={7} align='right'>
                <Typography variant='h3'>{t('single.label.filter')}</Typography>
            </Grid>
            <Grid item xs={5} align='right'>
                <FormControl className='noDivPadding'>
                    <Select
                        style={{
                            backgroundColor: '#1976d2',
                            color: 'white',
                            textAlign: 'center'
                        }}
                        onChange={this.setRoutesFilter}
                        value={routes_filter}
                        variant='filled'
                    >
                        <MenuItem value={'time'}>{t('single.filter.time')}</MenuItem>
                        <MenuItem value={'price'}>{t('single.filter.price')}</MenuItem>
                        <MenuItem value={'duration'}>{t('single.filter.duration')}</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>;
    }

    getRoutes = () => {
        const { data, goto } = this.props;
        const { origin_selected, origin_name, destination_selected, destination_name, routes_filter, routes_page } = this.state;
        const routes = this.routes;

        if (!origin_selected || !destination_selected)
            return;

        switch (routes_page) {
            case 1: return [
                <RouteInfo
                    details={{
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[routes_filter][0]
                    }}
                    action={() => {
                        goto('nif', {
                            ...data,
                            prev_page: 'single',
                            price: routes[routes_filter][0].price,
                            single_state: this.state
                        });
                    }}
                />,
                <RouteInfo
                    details={{
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[routes_filter][1]
                    }}
                    action={() => {
                        goto('nif', {
                            ...data,
                            prev_page: 'single',
                            price: routes[routes_filter][1].price,
                            single_state: this.state
                        });
                    }}
                />
            ];
            case 2: return [
                <RouteInfo
                    details={{
                        origin_name: origin_name,
                        destination_name: destination_name,
                        ...routes[routes_filter][2]
                    }}
                    action={() => {
                        goto('nif', {
                            ...data,
                            prev_page: 'single',
                            price: routes[routes_filter][2].price,
                            single_state: this.state
                        });
                    }}
                />
            ];
            default: return;
        }
    }

    getRoutesPagination = () => {
        const { t } = this.props;
        const { origin_selected, destination_selected, routes_page } = this.state;

        if (!origin_selected || !destination_selected)
            return;

        return <>
            <LeftButton text={t('single.button.prev')} action={() => { this.routesPageChange(routes_page - 1); }} disabled={routes_page === 1} />
            <RightButton text={t('single.button.more')} action={() => { this.routesPageChange(routes_page + 1); }} disabled={routes_page === 2} />
        </>;
    }

    routesPageChange = (page) => {
        this.setRoutesPage(page);
    }

    render() {
        const { goto, t } = this.props;
        const { departure_date, destination_locations_modal, destination_name, lose_info_action, lose_info_modal, origin_locations_modal, origin_name } = this.state;
        const origin_names = this.origin_names;
        const destination_names = this.destination_names;

        return (
            <>
                <LoseInfoModal
                    action={() => { lose_info_action() }}
                    close={() => { this.setLoseInfoModal(false); }}
                    open={lose_info_modal}
                />
                <LocationsModal
                    action={(name) => { this.setOriginName(name); this.setOriginSelected(true); this.setOriginLocationsModal(false); }}
                    location_names={origin_names}
                    close={() => { this.setOriginLocationsModal(false); }}
                    open={origin_locations_modal}
                />
                <LocationsModal
                    action={(name) => { this.setDestinationName(name); this.setDestinationSelected(true); this.setDestinationLocationsModal(false); }}
                    location_names={destination_names}
                    close={() => { this.setDestinationLocationsModal(false); }}
                    open={destination_locations_modal}
                />
                <Grid container alignItems='center'>
                    <Grid item xs={12}>
                        <Progress
                            bigSteps={[
                                [<Typography fontWeight='bold'>{t('progress.bigStep.tickets.single')}</Typography>, () => { this.setLoseInfoAction(() => { goto('operation'); }); this.setLoseInfoModal(true); }]
                            ]}
                            smallSteps={this.getSmallSteps()}
                        />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        <Typography variant='h1' fontWeight='bold'>{t('single.prompt.create')}</Typography>
                        <hr />
                    </Grid>
                    <Grid item xs={2} align='left'>
                        {this.getOriginButton()}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant='h3'>{origin_name}</Typography>
                    </Grid>
                    <Grid item xs={2} align='left'>
                        {this.getDestinationButton()}
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant='h3'>{destination_name}</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='h3'>{t('single.label.date')}</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <BasicDatePicker date={departure_date} action={this.setDepartureDate} />
                    </Grid>
                    <Grid item xs={12} align='center'>
                        {this.getRoutesPrompt()}
                    </Grid>
                    <Grid item xs={12} align='right' marginTop='-2vh' marginBottom='-1vh'>
                        {this.getRoutesFilter()}
                    </Grid>
                    <Grid item xs={12}>
                        {this.getRoutes()}
                    </Grid>
                    <Grid item xs={12} align='right' marginTop='-2vh'>
                        {this.getRoutesPagination()}
                    </Grid>
                </Grid>
                <Grid container position='absolute' bottom='1vh' width='54.25vh'>
                    <Grid item xs={12} align='left'>
                        <BackButton text={t('button.back')} action={() => { this.setLoseInfoAction(() => { goto('tickets'); }); this.setLoseInfoModal(true); }} />
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withTranslation('common')(SinglePage);