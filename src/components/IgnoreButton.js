import { Button } from '@mui/material';
import { withTranslation } from 'react-i18next';
import { Component } from 'react';

/**
 * 
 */
class IgnoreButton extends Component {

    render() {
        const { action, t } = this.props;

        return (
            <Button
                style={{
                    height: '5vh',
                    fontSize: '1.5vh'
                }}
                variant='contained'
                color='primary'
                onClick={() => {
                    action();
                }}
            >
                {t('button.ignore')}
            </Button>
        );
    }
}
export default withTranslation('common')(IgnoreButton)