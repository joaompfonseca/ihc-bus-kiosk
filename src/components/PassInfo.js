import { Component } from "react";
import { Grid, Typography } from "@mui/material";
import { CompareArrows } from "@mui/icons-material";
import { withTranslation } from "react-i18next";

class PassInfo extends Component {

    render() {
        const { t, action } = this.props;
        const {
            pass_name, price,
            location_names,
            buses } = this.props.info;

        return (
            <Grid container className='noDivPadding' alignItems='center'
                style={{
                    paddingInline: '0.5vh',
                    borderRadius: '0.5vh',
                    borderWidth: '0.3vh',
                    borderColor: '#1976d2',
                    borderStyle: 'solid',
                    marginBottom: '1vh'
                }}>
                {/* Row 1 */}
                <Grid item xs={9}>
                    <Typography variant='h3' fontWeight='bold'>
                        {pass_name}
                    </Typography>
                </Grid>
                <Grid item xs={3} align='center'>
                    <Typography variant='h1' fontWeight='bold' paddingTop='1vh'>
                        {price}
                    </Typography>
                </Grid>
                {/* Row 2 */}
                <Grid item xs={4}>
                    <Typography variant='h4'>
                        {location_names[0]}
                    </Typography>
                </Grid>
                <Grid item xs={1} align='center'>
                    <CompareArrows />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='h4' align='right'>
                        {location_names[1]}
                    </Typography>
                </Grid>
                <Grid item xs={3} align='center'>
                    
                </Grid>
                {/* Row 3 */}
                <Grid item xs={4}>
                    <Typography variant='h4' color='text.secondary'>
                        {t('passInfo.buses') + ' (' + buses.length + '): ' + buses}
                    </Typography>
                </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>
        );
    }
}
export default withTranslation('common')(PassInfo);