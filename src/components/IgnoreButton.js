import { Component } from 'react';
import { Button } from '@mui/material';
import { withTranslation } from 'react-i18next';

class IgnoreButton extends Component {

    render() {
        const { action = () => { }, disabled = false, t } = this.props;

        return (
            <Button
                style={{
                    backgroundColor: '#1976d2',
                    height: '5vh',
                    minWidth: '7.5vh'
                }}
                disabled={disabled}
                variant='contained'
                onClick={() => { action(); }}
            >
                {t('button.ignore')}
            </Button>
        );
    }
}

export default withTranslation('common')(IgnoreButton)