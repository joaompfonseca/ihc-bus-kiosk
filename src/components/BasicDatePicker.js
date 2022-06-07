import { Component } from 'react';
import { Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class BasicDatePicker extends Component {

    state = {
        date: this.props.date
    }

    render = () => {
        const { action } = this.props;
        const { date } = this.state;
        
        return (
            <Grid container className='datePicker'>
                <DatePicker
                    selected={date}
                    dateFormat={'dd/MM/yyyy'}
                    onChange={(date) => { 
                        this.setState({date: date});
                        action(date);
                     }}
                />
            </Grid>
        );
    }
}

export default BasicDatePicker;