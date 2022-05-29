import { KeyboardArrowRight } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import ContinueButton from "./ContinueButton";

/**
 * props.action - Função que vai excutar a ação pretendida
 * props.details - Informação sobre a rota {logo, price, origin_name, origin_time, destination_name, destination_time, buses, action}
 */
class RouteInfo extends Component {

    render() {
        const { t, action } = this.props;
        const {
            logo, price,
            origin_name, origin_time,
            destination_name, destination_time,
            buses } = this.props.details;

        return (
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
                    <ContinueButton action={() => { action() }} />
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
        );
    }
}
export default withTranslation('common')(RouteInfo);