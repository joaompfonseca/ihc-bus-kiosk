import { Component } from 'react';
import { withTranslation } from "react-i18next";
import { Button } from '@mui/material';
import CountryFlag from 'react-country-flag';

class StartButton extends Component {

    render = () => {
        const { action, disabled = false, i18n, flag, lng, text } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#1976d2',
                    height: '5vh',
                    justifyContent: 'left',
                    width: '20vh'
                }}
                disabled={disabled}
                variant='contained'
                startIcon={<CountryFlag style={{ fontSize: '4vh', marginRight: '1vh' }} countryCode={flag} svg />}
                onClick={() => {
                    i18n.changeLanguage(lng);
                    action();
                }}
            >
                {text}
            </Button>
        );
    }
}

export default withTranslation('common')(StartButton);