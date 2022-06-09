import { Component } from 'react';
import { Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import { LeftButton, RightButton } from '.'
import 'react-datepicker/dist/react-datepicker.css';

class BasicDatePicker extends Component {

    state = {
        date: this.props.date
    }

    render = () => {
        const { action } = this.props;
        const { date } = this.state;
        const yesterday = new Date(date.getTime() - (1 * 86400000));
        const today = new Date();
        const tomorrow = new Date(date.getTime() + (1 * 86400000));

        return (
            <Grid container className='noDivPadding datePicker' padding='0vh'>
                <Grid item xs={4} align='right'>
                    <LeftButton action={() => { this.setState({ date: yesterday }); action(yesterday); }} disabled={date.toISOString().split('T')[0] === today.toISOString().split('T')[0]}/>
                </Grid>
                <Grid item xs={4}>
                    <DatePicker
                        selected={date}
                        dateFormat={'dd/MM/yyyy'}
                        minDate={today}
                        onChange={(date) => { this.setState({ date: date }); action(date); }}
                    />
                </Grid>
                <Grid item xs={4} align='left'>
                    <RightButton action={() => { this.setState({ date: tomorrow }); action(tomorrow); }} />
                </Grid>
            </Grid>
        );
    }
}

export default BasicDatePicker;