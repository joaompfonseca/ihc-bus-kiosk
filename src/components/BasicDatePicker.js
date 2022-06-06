import { Component } from 'react';
import { Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class BasicDatePicker extends Component {

    state = {
        date: new Date()
    }

    render = () => {
        const { date } = this.state;

        return (
            <Grid container className='datePicker'>
                <DatePicker
                    selected={date}
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => { this.setState({ date: date }); }}
                />
            </Grid>
        );
    }
}

export default BasicDatePicker;